<template>
  <div class="mt-12 border-t border-gray-100 pt-6">
    <div class="text-center sm:flex sm:justify-between sm:text-left">
      <p class="text-sm text-gray-500">
        <span class="block sm:inline">All rights reserved.</span>
        
        <template v-for="(link, index) in policyLinks" :key="link.text">
          <a class="inline-block text-teal-600 underline transition hover:text-teal-600/75" :href="link.url">
            {{ link.text }}
          </a>
          <span v-if="index < policyLinks.length - 1">&middot;</span>
        </template>
      </p>

      <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
        &copy; {{ new Date().getFullYear() }} {{ companyName }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    companyName: {
      type: String,
      required: true,
    },
    policyLinks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
