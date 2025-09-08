<template>
	<div>
		<div class="flex justify-center text-teal-600 sm:justify-start">
			<LogoIcon class="w-full max-w-36" />
		</div>

		<p
			class="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left"
		>
			{{ description }}
		</p>

		<ul class="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
			<li v-for="social in socials" :key="social.name">
				<a
					:href="social.url"
					rel="noreferrer"
					target="_blank"
					class="text-teal-700 transition hover:text-teal-700/75"
				>
					<component :is="social.icon" class="h-6 w-6" />
				</a>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import LogoIcon from "~icons/custom/logo";

defineProps<{
	description: string;
	socials: Array<{ type: string; text: string }>;
}>();
</script>
