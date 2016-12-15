<?php
/**
 * Plugin Name: <%= name %>
 * Plugin URI:  <%= homepage %>
 * Description: <%= description %>
 * Version:     <%= version %>
 * Author:      <%= author %>
 * Author URI:  <%= authorurl %>
 * License:     GPLv2
 * Text Domain: <%= slug %>
 * Domain Path: /languages
 *
 * @link <%= homepage %>
 * @version <%= version %>
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

require_once __DIR__ . '/inc/namespace.php';
<% if ( autoloader == 'Basic' ) { %>
/**
 * Autoloads files with classes when needed
 *
 * @since  <%= version %>
 * @param  string $class_name Name of the class being requested
 * @todo   Refactor this shit.
 */
function <%= prefix %>_autoload_classes( $class_name ) {
	if ( 0 !== strpos( $class_name, '<%= namespace %>' ) ) {
		return;
	}

	$filename = strtolower( str_replace(
		'_', '-',
		substr( $class_name, strlen( '<%= namespace %>' ) )
	) );

	<%= classname %>::include_file( 'includes/class-' . $filename );
}
spl_autoload_register( '<%= prefix %>_autoload_classes' );
<% } %>

// Kick it off.
add_action( 'plugins_loaded', __NAMESPACE__ . '\\bootstrap' );
