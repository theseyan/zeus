<script>

    import Router from 'svelte-spa-router';
    import Sidebar from './components/Sidebar/Sidebar.svelte';
    import Home from './pages/Home/Home.svelte';
    import Posts from './pages/Posts/Posts.svelte';

    const routes = {
        '/': Home,
        '/posts': Posts,
        '/posts/*': Posts
    };

</script>

<main>
    <Sidebar />
    <div class="page">
        <Router {routes}/>
    </div>
</main>

<style>
    main {
        display: flex;
    }
    .page {
        width: 100%;
        height: 100vh;
        overflow: auto;
    }
</style>