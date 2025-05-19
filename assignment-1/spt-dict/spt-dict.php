<?php
/*
 * Plugin Name:       Sparrow Dictionary
 * Plugin URI:        https://wordpress.org/plugins/
 * Description:       A plugin to show Word meanings.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Asif Rahaman
 * Author URI:        https://portfolio.asif.rocks
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       spt-dict
 * Domain Path:       /languages
 */

 class Sparrow_Dictionary{
    const SPT_VERSION = '1.0.0.0';
    public function __construct(){
      
        add_action('wp_enqueue_scripts',[$this, 'load_assets']);
        //add_action('admin_enqueue_scripts',[$this, 'load_admin_assets']);
    }
    function load_assets(){
        wp_enqueue_style(   'spt-dict-main', plugin_dir_url(__FILE__) .'assets/css/spt-dict-main.css',[],self::SPT_VERSION,);
        wp_enqueue_script(
            'spt-dict-main-js', plugin_dir_url(__FILE__) .'assets/js/spt-dict-main.js',
            [],
            self::SPT_VERSION,
            array(
                'strategy' => 'async',
                'in_footer' => true
                )
            );
    }
 }
 new Sparrow_Dictionary();