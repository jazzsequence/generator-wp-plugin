<?php
/**
 * Plugin Name: <%= name %>
 * Plugin URI:  <%= homepage %>
 * Description: <%= description %>
 * Author:      <%= author %>
 * Author URI:  <%= authorurl %>
 * License:     GPLv2
 * Text Domain: <%= slug %>
 * Domain Path: /languages
 *
 * @link <%= homepage %>
 */

/**
 * Copyright (c) <%= year %> <%= author %>
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2 or, at
 * your discretion, any later version, as published by the Free
 * Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */

/**
 * Built using the Human Made plugin generator!
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
