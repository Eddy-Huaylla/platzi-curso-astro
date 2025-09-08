<template>
	<!-- Default Link -->
	<a
		v-if="!link.type"
		:href="link.url"
		class="text-gray-700 transition hover:text-gray-700/75"
	>
		{{ link.text }}
	</a>

	<!-- Live Chat Link -->
	<a
		v-else-if="link.type === 'live'"
		:href="link.url"
		class="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
	>
		<span class="text-gray-700 transition group-hover:text-gray-700/75">{{
			link.text
		}}</span>
		<span class="relative flex size-2">
			<span
				class="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
			></span>
			<span
				class="relative inline-flex size-2 rounded-full bg-teal-500"
			></span>
		</span>
	</a>

	<!-- Contact Email/Phone Links -->
	<a
		v-else-if="link.type === 'email' || link.type === 'phone'"
		:href="link.url"
		class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
	>
		<!-- Scoped slot for contact icons -->
		<component :is="link.iconComponent" class="size-5 text-gray-900" />
		<span class="flex-1 text-gray-700">{{ link.text }}</span>
	</a>

	<!-- Contact Address (div instead of a) -->
	<div
		v-else-if="link.type === 'address'"
		class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
	>
		<component :is="link.iconComponent" class="size-5 text-gray-900" />
		<address class="-mt-0.5 flex-1 text-gray-700 not-italic">
			{{ link.text }}
		</address>
	</div>
</template>

<script>
export default {
	props: {
		link: {
			type: Object,
			required: true,
		},
	},
};
</script>
