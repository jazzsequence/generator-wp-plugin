<?php
/**
 * Plugin Name: <%= name %>
 * Plugin URI: <%= homepage %>
 * Description: <%= description %>
 * Author: <%= author %>
 * Author URI: <%= authorurl %>
 * License: GPLv2
 */

namespace <%= project %>\<%= namespace %>;

<% if ( autoloader == 'existing' ) {
%>use HM\Autoloader;

require_once __DIR__ . '/inc/namespace.php';

Autoloader\register_class_path( __NAMESPACE__, __DIR__ . '/inc' );
<% } else {
%>require_once __DIR__ . '/inc/namespace.php';
<% }
%>
// Kick it off.
add_action( 'plugins_loaded', __NAMESPACE__ . '\\bootstrap' );
