<div class="input-dropdown" bind:this={node}>
    <input bind:this={input} autocomplete="off" id="tags" class="input input-text" placeholder="Search for tags..." type="text">
    <div bind:this={dropdown} class="dropdown" style="display:block;"></div>
</div>

<script>

    import EventEmitter from 'events';
    import {onMount} from 'svelte';

    export const events = new EventEmitter();
    let node;
    let input;
    let dropdown;

    let items = [];
    let activeItem = null;

    export function showDropdown() {
        dropdown.style.display = 'block';
        dropdown.style.padding = '0px 0px 5px';
    }

    export function hideDropdown() {
        dropdown.style.display = 'none';
        dropdown.style.padding = '0';
    }

    export function addItem(data) {
        var item = document.createElement('span');
        item.className = 'item';
        item.innerHTML = data.content;

        item.onclick = data.onaction;

        items.push(data);
        dropdown.appendChild(item);
        events.emit('addItem', data);
    }

    export function removeItem(index) {
        dropdown.removeChild(dropdown.childNodes[index]);
        items.splice(index, 1);

        events.emit('removeItem', {index: index});
    }

    export function clearItems() {
        dropdown.innerHTML = "";
        items = [];
        activeItem = null;
    }

    export function select(index) {
        if(activeItem != null) {
            dropdown.childNodes[activeItem].className = 'item';
        }
        dropdown.childNodes[index].className = 'item active';
        activeItem = index;
    }

    export function unselect() {
        if(activeItem != null) dropdown.childNodes[activeItem].className = 'item';
        activeItem = null;
    }

    onMount(() => {

        input.addEventListener('focus', showDropdown);
        input.addEventListener('input', (e) => {
            events.emit('input', e);
        });
        addEventListener('mousedown', (evt) => {
            if(dropdown.contains(evt.target) || evt.target == input) return;
            else hideDropdown();
        });

        addEventListener('keydown', (evt) => {
            if(document.activeElement == input) {
                if(evt.key == "ArrowUp") {
                    if(activeItem != null && activeItem > 0) {
                        evt.preventDefault();
                        select(activeItem - 1);
                    }
                }
                else if(evt.key == "ArrowDown") {
                    if(activeItem == null && items.length != 0) {
                        evt.preventDefault();
                        select(0);
                    }else if(activeItem < items.length-1) {
                        evt.preventDefault();
                        select(activeItem + 1);
                    }
                }
                else if(evt.key == "Enter") {
                    if(activeItem != null) {
                        evt.preventDefault();
                        items[activeItem].onaction();
                    }
                }
            }
        });

    });

</script>
<style>
    .input-dropdown {
        position: relative;
    }
    .dropdown {
        display: none;
        background-color: white;
        border-radius: 0px 0px 7px 7px;
        padding: 0;
        position: absolute;
        width: 100%;
        box-shadow: 0px 3px 3px #0000002e;
    }
    :global(.dropdown .item) {
        display: block;
        padding: 10px 15px;
        cursor: pointer;
    }
    :global(.dropdown .item.active, .dropdown .item:hover) {
        background-color: #efefef;
    }
</style>