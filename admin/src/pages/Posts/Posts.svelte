<script>

    import Router from 'svelte-spa-router';
    import UserBox from '../../components/UserBox/UserBox.svelte';
    import ListPosts from './ListPosts/ListPosts.svelte';
    import CreatePost from './CreatePost/CreatePost.svelte';

    const prefix = '/posts';
    const routes = {
        '/': ListPosts,
        '/create': CreatePost
    };

</script>

<main class="main padded">
    <UserBox />
    <Router {routes} {prefix} />
</main>

<style>

</style>