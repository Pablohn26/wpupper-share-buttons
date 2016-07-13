<?php
/**
 *
 * @package WPUpper Share Buttons
 * @author  Victor Freitas
 * @subpackage View Admin Page
 * @version 2.0.0
 */

if ( ! function_exists( 'add_action' ) )
	exit(0);

use WPUSB_Setting as Setting;
use WPUSB_App as App;
use WPUSB_Utils as Utils;
use WPUSB_Social_Elements as Elements;

class WPUSB_Settings_View
{
	/**
	 * Display page setting
	 *
	 * @since 3.1.0
	 * @version 2.0.0
	 * @param Null
	 * @return Void Display page
	 */
	public static function render_settings_page()
	{
		$model               = new Setting();
		$prefix              = Setting::PREFIX;
		$option_name         = "{$prefix}_settings";
		$option_social_media = "{$prefix}_social_media";
?>
		<div class="wrap">
			<h2><?php _e( 'WPUpper Share Buttons', App::TEXTDOMAIN ); ?></h2>

			<?php
				if ( Utils::get_update( 'settings-updated' ) )
					self::update_notice_message();
			?>

			<p class="description"><?php _e( 'Add the Share Buttons automatically.', App::TEXTDOMAIN ); ?></p>
			<span class="<?php echo "{$prefix}-title-wrap"; ?>"><?php _e( 'Settings', App::TEXTDOMAIN ); ?></span>

			<?php self::menu_top(); ?>

			<div class="<?php echo "{$prefix}-wrap"; ?>" data-component="share-settings">

			<div data-component="share-preview">
				<span class="ajax-spinner">loading...</span>
				<div data-element="<?php echo $prefix; ?>"></div>
			</div>

				<form action="options.php" method="post">
					<table class="form-table <?php echo "{$prefix}-table"; ?>" data-table="configurations">
						<tbody>
							<tr class="<?php echo $prefix; ?>-items-available">
								<th scope="row">
									<label><?php _e( 'Places available', App::TEXTDOMAIN ); ?></label>
								</th>
								<?php
									foreach( Setting::$locations as $title => $location ) :
										self::td(array(
											'type'       => 'checkbox',
											'id'         => $location,
											'name'       => "{$option_name}[{$location}]",
											'value'      => 'on',
											'is_checked' => checked( 'on', $model->$location, false ),
											'title'      => __( $title, App::TEXTDOMAIN ),
										));
									endforeach;
								?>
							</tr>
							<tr class="<?php echo $prefix; ?>-social-networks" data-element="sortable">
								<th scope="row">
									<label for="social-media"><?php _e( 'Social networks available', App::TEXTDOMAIN ); ?></label>
								</th>
									<?php
									foreach ( Elements::social_media() as $key => $social ) :
										$option_value = Utils::option( $key );
										$id           = ( 'google' == $key ) ? "{$key}-plus" : $key;
										self::td(array(
											'type'        => 'checkbox',
											'id'          => $id,
											'name'        => "{$option_social_media}[{$key}]",
											'value'       => $key,
											'is_checked'  => checked( $key, $option_value, false ),
											'label-class' => "{$prefix}-icon {$social->class}-icon",
											'td-class'    => "{$prefix}-select-item",
											'td-id'       => $key,
											'td-title'    => $social->name,
											'span'        => false,
										));
									endforeach;
									?>
							</tr>
							<tr>
								<th scope="row">
									<label for="<?php echo $prefix; ?>-class">
										<?php _e( 'Custom class', App::TEXTDOMAIN ); ?>
									</label>
								</th>
								<?php
									self::td(array(
										'id'          => 'class',
										'class'       => 'large-text',
										'name'        => "{$option_name}[class]",
										'value'       => $model->class,
										'placeholder' => __( 'Custom class for primary div', App::TEXTDOMAIN ),
										'span'        => false,
									));
								?>
							</tr>
							<tr>
								<th scope="row">
									<label for="<?php echo $prefix; ?>-context">
										<?php _e( 'Context ID', App::TEXTDOMAIN ); ?>
									</label>
								</th>
								<?php
									self::td(array(
										'id'          => 'fixed-context',
										'class'       => 'large-text',
										'name'        => "{$option_name}[fixed_context]",
										'value'       => $model->fixed_context,
										'placeholder' => __( 'Enter name to context of search. ID of content tag', App::TEXTDOMAIN ),
										'description' => __( 'This is to set the fixed layout to the left of the post content. <strong>Example:</strong> <code>wrap</code> use {id} for post id.', App::TEXTDOMAIN ),
										'span'        => false,
									));
								?>
							</tr>
							<tr class="<?php echo $prefix; ?>-layout-options">
								<th scope="row">
									<?php _e( 'Layout options', App::TEXTDOMAIN ); ?>
									<p class="description">
										<?php _e( 'All layout supports responsive', App::TEXTDOMAIN ); ?>
									</p>
								</th>
								<?php
									foreach( Setting::$themes as $title => $theme ) :
										self::td(array(
											'type'       => 'radio',
											'id'         => $theme,
											'class'      => 'layout-preview',
											'name'       => "{$option_name}[layout]",
											'value'      => $theme,
											'is_checked' => checked( $theme, $model->layout, false ),
											'title'      => __( $title, App::TEXTDOMAIN ),
										));
									endforeach;
								?>
							</tr>
							<tr class="<?php echo $prefix; ?>-position-fixed">
								<th scope="row">
									<?php _e( 'Position fixed', App::TEXTDOMAIN ); ?>
								</th>
								<?php
									self::td(array(
										'type'       => 'radio',
										'id'         => 'fixed-left',
										'class'      => 'layout-preview layout-fixed',
										'name'       => "{$option_name}[position_fixed]",
										'value'      => 'fixed-left',
										'is_checked' => checked( 'fixed-left', $model->position_fixed, false ),
										'title'      => __( 'Fixed left', App::TEXTDOMAIN ),
										'data-attr'  => 'data-element="position-fixed"',
									));
									self::td(array(
										'type'       => 'radio',
										'id'         => 'fixed-right',
										'class'      => 'layout-preview layout-fixed',
										'name'       => "{$option_name}[position_fixed]",
										'value'      => 'fixed-right',
										'is_checked' => checked( 'fixed-right', $model->position_fixed, false ),
										'title'      => __( 'Fixed right', App::TEXTDOMAIN ),
										'data-attr'  => 'data-element="position-fixed"',
									));
								?>
								<td class="<?php echo "{$prefix}-fixed-clear"; ?>">
									<input type="button"
									       data-action="fixed-disabled"
									       value="<?php _e( 'Clear', App::TEXTDOMAIN ); ?>">
									<span><?php _e( 'Click to clear the positions.', App::TEXTDOMAIN ); ?></span>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<?php _e( 'Fixed Items in top', App::TEXTDOMAIN ); ?>
								</th>
								<td>
								<?php
									self::add_checkbox(array(
										'name'    => "{$option_name}[fixed_top]",
										'id'      => 'fixed-top',
										'checked' => checked( 'fixed-top', $model->fixed_top, false ),
										'value'   => 'fixed-top',
									));
								?>
									<p class="description">
										<?php _e( 'It is activated when scrolling the page on the buttons position.', App::TEXTDOMAIN ); ?>
									</p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<?php _e( 'Highlighted by reference', App::TEXTDOMAIN ); ?>
								</th>
								<td>
								<?php
									self::add_checkbox(array(
										'name'    => "{$option_name}[referrer]",
										'id'      => 'referrer',
										'checked' => checked( 'yes', $model->referrer, false ),
										'value'   => 'yes',
									));
								?>
									<p class="description">
										<?php _e( 'This allows highlight the social network where the user Came from.', App::TEXTDOMAIN ); ?>
									</p>
								</td>
							</tr>

							<tr class="<?php echo $prefix; ?>-info-twitter">
								<th scope="row">
									Twiiter share counter
								</th>
								<td>
									<p class="description">
									<?php
										_e( 'The share count Twitter is powered by <a href="http://newsharecounts.com" target="_blank">newsharecounts.com</a>, you have to sign up with your Twitter account to get free service and twitter count. Just visit the website, fill in the domain of your site and click Sign in with Twitter. That, and nothing else!', App::TEXTDOMAIN );
									?>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<input type="hidden"
					       name="<?php echo $option_social_media; ?>[order]"
					       data-element="order"
					       value='<?php echo Utils::option( 'order' ); ?>'>

                	<input type="hidden"
		                   data-element="fixed"
		                   name="<?php echo "{$option_name}[fixed]"; ?>"
		                   value="<?php echo Utils::option( 'fixed' ); ?>">
					<?php
						settings_fields( "{$option_name}_group" );
						submit_button( __( 'Save Changes', App::TEXTDOMAIN ) );
					?>
				</form>
			</div>
		</div>
<?php
	}

	/**
	 * Display update notice
	 *
	 * @since 1.0
	 * @param Null
	 * @return Void
	 */
	public static function update_notice_message()
	{
	?>
		<div class="updated notice is-dismissible">
			<p><strong><?php _e( 'Settings saved.', App::TEXTDOMAIN ); ?></strong></p>
			<button class="notice-dismiss"></button>
		</div>
	<?php
	}

	public static function menu_top()
	{
		$general    = Setting::HOME_SETTINGS;
		$extra      = Setting::EXTRA_SETTINGS;
		$use_option = Setting::USE_OPTIONS;
		$report     = Setting::SHARING_REPORT;
	?>
		<div class="<?php echo Setting::PREFIX; ?>-menu">
			<ul>
				<li<?php echo Utils::selected_menu( $general ); ?>>
					<a href="<?php menu_page_url( $general ); ?>">
						<?php _e( 'General', App::TEXTDOMAIN ); ?>
					</a>
				</li>
				<li<?php echo Utils::selected_menu( $extra ); ?>>
					<a href="<?php menu_page_url( $extra ); ?>">
						<?php _e( 'Extra Settings', App::TEXTDOMAIN ); ?>
					</a>
				</li>
				<li<?php echo Utils::selected_menu( $use_option ); ?>>
					<a href="<?php menu_page_url( $use_option ); ?>">
						<?php _e( 'Use options', App::TEXTDOMAIN ); ?>
					</a>
				</li>
				<li<?php echo Utils::selected_menu( $report ); ?>>
					<a href="<?php menu_page_url( $report ); ?>">
						<?php _e( 'Sharing Report', App::TEXTDOMAIN ); ?>
					</a>
				</li>
			</ul>
		</div>
	<?php
	}

	public static function td( $args = array() )
	{
		$prefix = Setting::PREFIX;
		$span   = '';
		$args   = static::_get_td_args( $args );
		$label  = static::_get_label( $prefix, $args );

		echo <<<EOD
			<td id="{$args['td-id']}"
			    class="{$args['td-class']}"
			    title="{$args['td-title']}">

	            <input type="{$args['type']}" {$args['data-attr']}
	                   id="{$prefix}-{$args['id']}"
	                   class="{$args['class']}"
	            	   name="{$args['name']}"
	            	   value="{$args['value']}"
	            	   placeholder="{$args['placeholder']}"
	            	   {$args['is_checked']}>
	           	{$label}
	           	<p class="description">{$args['description']}</p>
	        </td>
EOD;
	}

	private static function _get_label( $prefix, $args )
	{
		$span = '';

		if ( $args['span'] )
			$span = "<span>{$args['title']}</span>";

       $label = <<<EOD
	       	<label for="{$prefix}-{$args['id']}"
	               class="{$args['label-class']}">
	               {$span}
	        </label>
EOD;
		return $label;
	}

	public static function add_checkbox( $args = array() )
	{
		$prefix = Setting::PREFIX;

		echo <<<EOD
			<div class="{$prefix}-custom-switch">

			    <input type="checkbox"
			    	   id="{$prefix}-{$args['id']}"
			    	   class="{$prefix}-check"
			    	   name="{$args['name']}"
			    	   value="{$args['value']}"
			    	   {$args['checked']}>

			    <label for="{$prefix}-{$args['id']}">
			        <span class="{$prefix}-inner"></span>
			        <span class="{$prefix}-switch"></span>
			    </label>

			</div>
EOD;
	}

	private static function _get_td_args( $args )
	{
		$defaults = array(
			'type'        => 'text',
			'description' => '',
			'placeholder' => '',
			'id'          => '',
			'class'       => '',
			'name'        => '',
			'value'       => '',
			'is_checked'  => '',
			'title'       => '',
			'td-id'       => '',
			'td-class'    => '',
			'label-class' => '',
			'td-title'    => '',
			'data-attr'   => '',
			'span'        => true,
		);

		return array_merge( $defaults, $args );
	}
}