
Settings
=====================================================



Learn how to integrate GoSquared's APIs with your website, web apps, mobile apps, and server-side code.

Getting Started
-----------------------------------------------------

GoSquared provides a Tracking API to send data to GoSquared, and multiple APIs for retrieving data in different forms – the Now and Trends APIs. We also have an Account API for performing actions on your GoSquared user account.


Code
-----------------------------------------------------

If you are on Mac OS X or Linux, chances are that one of the following two
commands will work for you

.. code-block:: guess

    $ sudo easy_install virtualenv

or even better

.. code-block:: guess

    $ sudo pip install virtualenv

One of these will probably install virtualenv on your system.  Maybe it's even
in your package manager.  If you use Ubuntu, try

.. code-block:: guess

	<script>
  	!function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
  	arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
  	d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
    insertBefore(d,q)}(window,document,'script','_gs');
 	
 	 _gs('GSN-123456-A');
	</script>


Full example page
-----------------------------------------------------

Below is an example page to show where the tracking code should be installed in context with everything else.

.. code-block:: guess


	<!DOCTYPE html>
	<html>
	  <head>
	    <title>This is my website</title>

	    <!-- GoSquared Tracking Code -->
	    <script>
	      !function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
	      arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
	      d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
	      insertBefore(d,q)}(window,document,'script','_gs');
	      _gs('GSN-123456-A');
	    </script>
	    <!-- End GoSquared Tracking Code -->
	  </head>

	  <body>
	    The rest of my website is here
	  </body>
	</html>


Getting help & updates
-----------------------------------------------------

We’re always happy to help you get set up with GoSquared. If you're stuck, want to find out more or need to speak to us, see the support centre.

Developer mailing list
-----------------------------------------------------

We're always pushing updates to our integration tools and APIs, so we run a developer mailing list where we keep you up to date on our latest work.

To be in the know of new features and updates as soon as they happen, join our mailing list and get access to betas and features before they launch.
