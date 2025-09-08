/// <reference types="unplugin-icons/types/vue" />
/// <reference types="unplugin-icons/types/react" />
/// <reference types="unplugin-icons/types/svelte" />

// Cualquier import ~icons/... será tratado como un componente válido
declare module "~icons/*" {
	const component: any;
	export default component;
}
