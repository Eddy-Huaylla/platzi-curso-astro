<template>
	<footer class="bg-white">
		<div
			class="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24"
		>
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
				<FooterInfo :description="description" :socials="socials" />
				<FooterLinks :sections="linkSections">
					<template #default="{ link }">
						<FooterLink :link="link">
							<!-- Pass through the contact-icon slot -->
							<template #icon="{ link: contactLink }">
								<slot name="contact-icon" :link="contactLink" />
							</template>
						</FooterLink>
					</template>
				</FooterLinks>
			</div>
			<FooterCopyright
				:company-name="companyName"
				:policy-links="policyLinks"
			/>
		</div>
	</footer>
</template>

<script setup>
import FooterInfo from "./FooterInfo.vue";
import FooterLinks from "./FooterLinks.vue";
import FooterCopyright from "./FooterCopyright.vue";
import FooterLink from "./FooterLink.vue";
import {
	description,
	socials,
	linkSections,
	companyName,
	policyLinks,
} from "../../data/footer.ts";
</script>
