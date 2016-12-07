<?php
/**
 *
 * @package WPUpper Share Buttons
 * @author  Victor Freitas
 * @subpackage Ajax Controller
 * @version 3.0.0
 */
if ( ! defined( 'ABSPATH' ) ) {
	 // Exit if accessed directly.
	exit(0);
}

class WPUSB_Ajax_Controller {

	/**
	* Initialize the plugin by ajax requests
	*
	* @since 1.2
	*/
	public function __construct() {
		$prefix = WPUSB_App::SLUG;

		add_action( "wp_ajax_{$prefix}_share_count_reports", array( &$this, 'share_count_reports_verify_request' ) );
		add_action( "wp_ajax_nopriv_{$prefix}_share_count_reports", array( &$this, 'share_count_reports_verify_request' ) );
		add_action( "wp_ajax_{$prefix}_share_preview", array( &$this, 'share_preview_verify_request' ) );
		add_action( "wp_ajax_{$prefix}_admin_notices", array( &$this, 'admin_notice_verify_request' ) );
	}

	/**
	 * Verify is valid request share count reports
	 *
	 * @since 3.6.0
	 * @param null
	 * @return void
	 */
	public function share_count_reports_verify_request() {
		if ( ! WPUSB_Utils::is_request_ajax() ) {
			exit(0);
		}

		$nonce = WPUSB_Utils::post( 'nonce', false );

		if ( ! wp_verify_nonce( $nonce, WPUSB_Setting::AJAX_VERIFY_NONCE_COUNTER ) ) {
			$this->_error_request( 'nonce_is_invalid' );
		}

		$post_id = WPUSB_Utils::post( 'reference', false, 'intval' );

		if ( ! $post_id ) {
			$this->_error_request( 'reference_is_empty' );
		}

		$this->_insert_counts_social_share( $post_id );
	}

	/**
	 * Verify is valid request share preview
	 *
	 * @since 3.6.0
	 * @param null
	 * @return void
	 */
	public function share_preview_verify_request() {
		if ( ! WPUSB_Utils::is_request_ajax() ) {
			exit(0);
		}

		$layout  = WPUSB_Utils::post( 'layout', false );
		$items   = WPUSB_Utils::post( 'items', false );
		$checked = WPUSB_Utils::post( 'checked', false );

		if ( ! ( $layout || $items || $checked ) ) {
			exit(0);
		}

		$this->_share_preview( $layout, $items, $checked );
	}

	/**
	 * Ajax request delete option admin notice
	 *
	 * @since 3.6.0
	 * @param null
	 * @return void
	 */
	public function admin_notice_verify_request() {
		if ( ! WPUSB_Utils::is_request_ajax() ) {
			exit(0);
		}

		$nonce = WPUSB_Utils::post( 'nonce', false );

		if ( ! wp_verify_nonce( $nonce, WPUSB_Setting::AJAX_ADMIN_NONCE ) ) {
			exit(0);
		}

		delete_option( WPUSB_App::SLUG . '-admin-notices' );
	}

	/**
	 * Retrieve the requests
	 *
	 * @since 1.2
	 * @global $wpdb
	 * @param Integer $post_id
	 * @return Void
	 */
	private function _insert_counts_social_share( $post_id ) {
		global $wpdb;

		$post_title      = WPUSB_Utils::rm_tags( get_the_title( $post_id ) );
		$count_facebook  = WPUSB_Utils::post( 'count_facebook', 0, 'intval' );
		$count_twitter   = WPUSB_Utils::post( 'count_twitter', 0, 'intval' );
		$count_google    = WPUSB_Utils::post( 'count_google', 0, 'intval' );
		$count_linkedin  = WPUSB_Utils::post( 'count_linkedin', 0, 'intval' );
		$count_pinterest = WPUSB_Utils::post( 'count_pinterest', 0, 'intval' );
		$count_tumblr    = WPUSB_Utils::post( 'count_tumblr', 0, 'intval' );
		$total           = ( $count_facebook + $count_twitter + $count_google + $count_linkedin + $count_pinterest + $count_tumblr );
		$table           = $wpdb->prefix . WPUSB_Setting::TABLE_NAME;

		if ( $total > 0 ) {
			$this->_select(
				$table,
				array(
					'post_id'         => $post_id,
					'post_title'      => $post_title,
					'count_facebook'  => $count_facebook,
					'count_twitter'   => $count_twitter,
					'count_google'    => $count_google,
					'count_linkedin'  => $count_linkedin,
					'count_pinterest' => $count_pinterest,
					'count_tumblr'    => $count_tumblr,
					'total'           => $total,
				)
			);
		}
		exit(1);
	}

	/**
	 * Select the table and check for records
	 *
	 * @since 1.0
	 * @global $wpdb
	 * @param String $table
	 * @param Array $data
	 * @return Void
	 */
	private function _select( $table, $data ) {
		global $wpdb;

		$sql       = $wpdb->prepare( "SELECT COUNT(*) FROM `{$table}` WHERE `post_id` = %d", $data['post_id'] );
		$row_count = $wpdb->get_var( $sql );
		$count     = intval( $row_count );

		if ( 1 === $count ) {
			$this->_update( $table, $data );
		}

		if ( 0 === $count ) {
			$this->_insert( $table, $data );
		}

		exit(1);
	}

	/**
	 * Update records in the table
	 *
	 * @since 1.0
	 * @global $wpdb
	 * @param String $table
	 * @param Array $data
	 * @return Void
	 */
	private function _update( $table, $data ) {
		global $wpdb;

		$wpdb->update(
			$table,
			array(
				'post_title' => $data['post_title'],
				'facebook'   => $data['count_facebook'],
				'twitter'    => $data['count_twitter'],
				'google'     => $data['count_google'],
				'linkedin'   => $data['count_linkedin'],
				'pinterest'  => $data['count_pinterest'],
				'tumblr'     => $data['count_tumblr'],
				'total'      => $data['total'],
			),
			array( 'post_id' => $data['post_id'], ),
			array( '%s', '%d', '%d', '%d', '%d', '%d', '%d', ),
			array( '%d', )
		);

		exit(1);
	}

	/**
	 * Insert records in the table
	 *
	 * @since 1.0
	 * @global $wpdb
	 * @param String $table
	 * @param Array $data
	 * @return Void
	 */
	private function _insert( $table, $data = array() ) {
		global $wpdb;

		$wpdb->insert(
			$table,
			array(
				'post_id'    => $data['post_id'],
				'post_title' => $data['post_title'],
				'facebook'   => $data['count_facebook'],
				'twitter'    => $data['count_twitter'],
				'google'     => $data['count_google'],
				'linkedin'   => $data['count_linkedin'],
				'pinterest'  => $data['count_pinterest'],
				'tumblr'     => $data['count_tumblr'],
				'total'      => $data['total'],
			)
		);

		exit(1);
	}

	/**
	 * Share preview in settings page
	 *
	 * @since 1.0
	 * @param String $layout
	 * @param String $items
	 * @param String $checked
	 * @return Void
	 */
	private function _share_preview( $layout, $items, $checked ) {
		$items   = $this->_json_decode_quoted( $items );
		$checked = $this->_json_decode_quoted( $checked );
		$this->_share_preview_list( $layout, $items, $checked );
	}

	/**
	 * Render share preview list
	 *
	 * @since 1.0
	 * @param null
	 * @return Void
	 */
	private function _share_preview_list( $layout, $items, $checked ) {
		global $wp_version;

		$list         = array();
		$social       = WPUSB_Social_Elements::social_media();
		$count        = 0;
		$fixed_layout = WPUSB_Utils::post( 'fixed_layout', 'buttons' );

		if ( ! is_array( $items ) ) {
			exit(0);
		}

		foreach ( $items as $key => $element ) {
			if ( ! in_array( $element, $checked ) ) {
				continue;
			}

			$item   = $social->{$element};
			$list[] = array(
				'prefix'       => WPUSB_App::SLUG,
				'slash'        => '&#8260;',
				'counter'      => str_replace( '.', '', $wp_version ),
				'item_class'   => $item->element,
				'item_name'    => $item->name,
				'inside'       => true,
				'first'        => ( 0 === $count ) ? true : false,
				'layout'       => $layout,
				'item_title'   => $item->title,
				'has_counter'  => $item->has_counter,
				'item_inside'  => $item->inside,
				'fixed_layout' => $fixed_layout,
				'btn_class'    => ( $fixed_layout == 'buttons' ) ? 'button' : $fixed_layout,
				'is_fixed_2'   => ( $fixed_layout == 'buttons' ) ? false : true,
			);
			$count++;
		}

		WPUSB_Utils::send_json( $list );
	}

	/**
	 * Error json requests
	 *
	 * @since 1.0
	 * @param String $message
	 * @return Void
	 */
	private function _error_request( $message = '' ) {
		http_response_code( 500 );
		WPUSB_Utils::error_server_json( 500, $message );
		exit(0);
	}

	/**
	 * Decoded json quoted
	 *
	 * @since 1.0
	 * @param Null
	 * @return Void
	 */
	private function _json_decode_quoted( $txt ) {
		$text = htmlspecialchars_decode( $txt );
		$text = WPUSB_Utils::rm_tags( $text, true );

		return json_decode( $text, true );
	}
}