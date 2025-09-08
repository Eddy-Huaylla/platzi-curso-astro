<template>
	<div
		class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2"
	>
		<div
			v-for="section in sections"
			:key="section.title"
			class="text-center sm:text-left"
		>
			<p class="text-lg font-medium text-gray-900">{{ section.title }}</p>

			<ul class="mt-8 space-y-4 text-sm">
				<li v-for="link in section.links" :key="link.text">
					<slot :link="link"></slot>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		sections: {
			type: Array,
			required: true,
		},
	},
};
</script>
