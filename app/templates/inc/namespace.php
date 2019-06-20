<?php
/**
 * <%= name %>
 */

namespace <%= project %>\<%= namespace %>;

/**
 * Bootstrap the plugin.
 *
 * Registers actions and filter required to run the plugin.
 */
function bootstrap() {<%
if ( autoloader == 'basic' ) { %>
	spl_autoload_register( __NAMESPACE__ . '\\autoload' );
<% }
%>
	// Add all your plugin hooks here.
}<% if ( autoloader == 'basic' ) { %>

/**
 * Autoload classes for this namespace.
 *
 * @param string $class Class name.
 */
function autoload( $class ) {
	if ( strpos( $class, __NAMESPACE__ . '\\' ) !== 0 ) {
		return;
	}

	$relative = strtolower( substr( $class, strlen( __NAMESPACE__ . '\\' ) ) );
	$parts = explode( '\\', $relative );
	$final = array_pop( $parts );
	array_push( $parts, 'class-' . $final . '.php' );
	$path = __DIR__ . '/' . implode( '/', $parts );

	require $path;
}<% }
%>
