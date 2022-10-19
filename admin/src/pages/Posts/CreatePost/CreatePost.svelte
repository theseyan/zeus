<script>

    import { onMount } from 'svelte';
    import Editor from '@tinymce/tinymce-svelte';
    import {Tags, InputSelector} from '../../../components';

    let tagsBox;
    let tagsInput;

    onMount(() => {
        
        tagsInput.events.on('input', (e) => {

        });

    });

</script>

<h1 class="title">Create Post</h1>
<form>
    <span class="label">Post Title</span>
    <input type="text" class="input input-text" placeholder="Enter a title for this post..." autocomplete="off" />
    
    <span class="label">Featured Image</span>
    <input type="file" class="input input-text" placeholder="Add a Featured Image to this post" />
    
    <span class="label">Body</span>
    <Editor
        cssClass="post-editor"
        id="CreatePost.body"
    />

    <span class="label">Excerpt or Description</span>
    <textarea class="input input-text"></textarea>

    <span class="label">Tags</span>
    <Tags style="margin-bottom: 10px;" bind:this={tagsBox} />
    <InputSelector bind:this={tagsInput} />

    <br />
    <span class="btn btn-primary">
        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"/></svg>
        Publish Post
    </span>
    <span class="btn btn-secondary">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M24 23h-20c-2.208 0-4-1.792-4-4v-15.694c.313-1.071 1.285-2.306 3-2.306 1.855 0 2.769 1.342 2.995 2.312l.005 1.688h18v18zm-2-16h-16v11s-.587-1-1.922-1c-1.104 0-2.078.896-2.078 2s.896 2 2 2h18v-14zm-2 12h-12v-10h12v10zm-8-9h-3v8h10v-8h-6v3h6v1h-2v3h-1v-3h-3v3h-1v-7z"/></svg>
        Save as Draft
    </span>
</form>

<style>
    :global(.post-editor) {
        margin-bottom: 20px;
    }
    form {
        margin-top: 40px;
        width: 60%;
    }
    form .input-text {
        margin-bottom: 20px;
    }
    form textarea {
        height: 115px;
    }
    form .btn-primary {
        margin-right: 15px;
        margin-bottom: 30px;
    }
    form .btn-secondary {
        margin-top: -4px;
    }
</style>