<script lang="ts">
    import "../app.css"
    import "@fontsource/nunito"
    import { darkmode } from "$stores/darkmode"
    import { theme } from "$stores/theme"
</script>

<custom-theming-element data-theme="{$theme}" class="{$darkmode ? 'dark' : 'light'}">
    <div class="top-0 left-0 w-screen h-screen text-surface-900-50-token bg-surface-50-900-token overflow-x-hidden overflow-y-scroll absolute">
        <div class="top-1/2 left-1/2 w-auto h-auto bg-surface-100-800-token rounded-xl -translate-x-1/2 -translate-y-1/2 absolute p-4">
            <div>This is currently just a placeholder page.</div>
        </div>
    </div>
</custom-theming-element>
