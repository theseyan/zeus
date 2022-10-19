<div style={$$props.style} class="tags" bind:this={node}></div>

<script>

    import EventEmitter from 'events';

    let node;
    let events = new EventEmitter();
    let tags = [];

    export function add(data) {
        let tag = document.createElement('span');
        tag.className = "tag";
        tag.innerHTML = `${data.tag} <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z" fill-rule="nonzero"/></svg>`;

        tag.lastElementChild.onclick = () => {
            remove({
                tag: data.tag
            });
        };

        tags.push(data);
        node.appendChild(tag);

        events.emit('add', data);
        events.emit('input', data);
    }

    export function remove(data) {
        var index = tags.findIndex(i => i.tag == data.tag);
        if(index == -1) return;
        var tag = tags[index];
        node.removeChild(node.childNodes[index]);
        tags.splice(index, 1);

        events.emit('remove', tag);
        events.emit('input', tag);
    }

    export function clear() {
        node.innerHTML = "";
        tags = [];
        events.emit('clear', {});
        events.emit('input', {});
    }

</script>

<style>
    :global(.tags .tag) {
        background-color: #eaeaea;
        padding: 5px 9px;
        display: inline-flex;
        border-radius: 50px;
        margin-right: 5px;
        font-size: 15px;
        align-items: center;
    }
    :global(.tags .tag svg) {
        width: 20px;
        margin-left: 5px;
        fill: #767676;
        cursor: pointer;
    }
    :global(.tags .tag svg:hover) {
        fill: #585858;
    }
</style>