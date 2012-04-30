<!DOCTYPE html>
<head>
	<meta charset="utf-8">
	<title>Mendeley API Explorer</title>
	<base href="http://local/2012/04/mendeley-api-html/"></base>
	<link rel="stylesheet" href="http://twitter.github.com/bootstrap/assets/css/bootstrap.css">
	<link rel="stylesheet" href="app.css">
</head>

<body>
	<article class="container">
		<header>
			<h1><a href="./">Mendeley API Explorer</a></h1>
		</header>

<? $path = trim(preg_replace('/[^a-z\/]/', '', $_GET['path']), '/'); ?>

<? if ($path): ?>
		<? include __DIR__ . '/html/' . $path . '.html'; ?>
<? else: ?>
	<!-- TODO: read descriptions and other date from each page -->
	<? $sections = array(
		'categories',
		'documents',
		'groups',
		'charts',
		//'profiles', // requires authentication
	); ?>

	<? foreach ($sections as $section): ?>
		<section id="<?= $section ?>">
			<h1 class="page-header"><?= ucfirst($section) ?></h1>
			<? include __DIR__ . '/html/' . $section . '/index.html'; ?>
		</section>
	<? endforeach; ?>
<? endif; ?>

	</article>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="app.js"></script>
</body>