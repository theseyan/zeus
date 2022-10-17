<script>

    import Router from 'svelte-spa-router';
    import Sidebar from './components/Sidebar/Sidebar.svelte';
    import Home from './pages/Home/Home.svelte';
    import Posts from './pages/Posts/Posts.svelte';

    const routes = {
        '/': Home,
        '/posts': Posts
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
    }
</style>