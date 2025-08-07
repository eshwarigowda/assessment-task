<template>
  
  <div class="bg--white">
    <!--Header -->
    <div class="flex justify-between items-center px-6 py-4 bg-gray-100">
  <!--heading -->
  <h1 class="text-xl font-semibold text-gray-800">Service Details</h1>

  
  <div class="text-gray-500 text-sm">
    <NuxtLink to="/" class="text-green-600 hover:underline">Home</NuxtLink>
    <span class="mx-1">/</span>
    <span>Service Details</span>
  </div>
</div>

    <!-- Layout -->
    <div class="flex flex-col lg:flex-row items-start gap-6 px-6 py-8 -mt-2">
      <!-- Sidebar -->
      <aside class="w-full lg:w-1/4 p-4 space-y-6">
        <!-- Services List -->
        <div class="bg-white p-6 rounded shadow space-y-2">
          <h2 class="text-xl font-semibold mb-4">Services List</h2>
          <ul>
            <li v-for="service in services" :key="service">
              <button
                class="block w-full text-left px-4 py-2 rounded transition-colors duration-200 text-gray-800 hover:text-green-600"
              >
                {{ formatServiceName(service) }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Download Catalog -->
        <div class="bg-white p-6 rounded shadow space-y-2">
          <h3 class="text-lg font-semibold mb-3">Download Catalog</h3>
          <button class="w-full px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2 border">
            📄 Catalog PDF
          </button>
          <button class="w-full px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2 border">
            📄 Catalog DOC
          </button>
        </div>

        <!-- Question Box -->
        <div class="bg-green-600 text-white p-6 rounded shadow">
          <h3 class="text-lg font-semibold mb-2">Have a Question?</h3>
          <p class="mb-1">📞 +1 5589 55488 55</p>
          <p>📧 contact@example.com</p>
        </div>
      </aside>

      <!-- ➡️ Main Content -->
      <main class="w-full lg:w-3/4 p-6 flex flex-col gap-6">
        <!-- Image Section -->
        <div class="flex justify-center">
          <img
            src="/image/services.jpg"
            alt="Service"
            class="rounded-md shadow w-full md:w-2/3"
          />
        </div>

        <!-- Description -->
        <div class="text-gray-700 text-sm leading-relaxed space-y-4">
          <p class="text-2xl ">
            Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas.   
          </p>
          <p>
            Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.
          </p>
          <p>
            Aut eum totam accusantium voluptatem.  
            Assumenda et porro nisi nihil nesciunt voluptatibus.  
            Ullamco laboris nisi ut aliquip ex ea.  
            Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.
          </p>
          <p>
            Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.
          </p>
        </div>
      </main>
    </div>
    
    <Newsletter />
    <Footer />
  </div>
</template>

<script setup>
const services = [
  'marketing',
  'graphic-design',
  'product-management',
  'web-design'
]

const formatServiceName = (name) =>
  name.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())

import Newsletter from '~/components/Newsletter.vue';
import Footer from '~/components/Footer.vue';
</script>
