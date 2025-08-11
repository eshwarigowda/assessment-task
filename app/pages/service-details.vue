<template>
  <Navbar />
  <div class="bg-white pt-24">
    <!-- Header -->
    <div class="flex flex-col gap-1 lg:flex-row justify-between items-start lg:items-center px-4 lg:px-6 py-4 bg-gray-100">
      <h1 class="text-xl font-semibold text-gray-800">Service Details</h1>
      <div class="text-gray-500 text-sm">
        <NuxtLink to="/" class="text-green-600 hover:underline">Home</NuxtLink>
        <span class="mx-1">/</span>
        <span>Service Details</span>
      </div>
    </div>

    <!-- Layout -->
    <div class="flex flex-col lg:flex-row items-start gap-6 px-4 lg:px-12 py-8 -mt-2">
      <!-- Sidebar -->
      <aside class="w-full lg:w-[30%] p-0 lg:p-4 space-y-6">
        <!--  Services List -->
        <div class="bg-white p-6  border border-gray-200 shadow-md w-full">
          <h2 class="text-lg font-bold text-gray-700 mb-4 border-b border-gray-200 pb-2">Services List</h2>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service">
              <button
                :class="[ 
                  'w-full flex items-center gap-2 px-4 py-2 rounded transition-all duration-200 text-sm font-medium',
                  selectedService === service
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:text-green-600'
                ]"
                @click="selectedService = service"
              >
                <i
                  :class="[ 
                    'fas fa-arrow-circle-right text-lg',
                    selectedService === service ? 'text-white' : 'text-green-600'
                  ]"
                ></i>
                {{ formatServiceName(service) }}
              </button>
            </li>
          </ul>
        </div>

        <!--  Download Catalog -->
        <div class="bg-white p-6 border-gray-200 shadow-md w-full">
          <h3 class="text-lg font-bold text-gray-700 pb-2 border-b border-gray-300 mb-4">
            Download Catalog
          </h3>
          <button class="w-full px-3 py-2 hover:bg-gray-100 flex items-center gap-3 text-sm text-gray-800">
            <i class="fas fa-file-pdf text-green-600 text-xl"></i> Catalog PDF
          </button>
          <button class="w-full px-3 py-2 hover:bg-gray-100 flex items-center gap-3 text-sm text-gray-800">
            <i class="fas fa-file-word text-green-600 text-xl"></i> Catalog DOC
          </button>
        </div>

        <!-- Have a Question -->
        <div class="bg-green-600 text-white p-6 text-center space-y-3 w-full">
          <i class="fas fa-headphones-alt text-3xl mb-2"></i>
          <h3 class="text-lg font-semibold">Have a Question?</h3>
          <div class="flex items-center justify-center gap-2 text-sm">
            <i class="fas fa-phone-alt text-white"></i>
            <span>+1 5589 55488 55</span>
          </div>
          <div class="flex items-center justify-center gap-2 text-sm">
            <i class="fas fa-envelope text-white"></i>
            <span>contact@example.com</span>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="w-full lg:w-[70%] px-0 lg:px-6 flex flex-col gap-6">
        <!-- Image -->
        <div class="w-full">
          <img
            src="/image/services.jpg"
            alt="Service"
            class="shadow w-full"
          />
        </div>

        <!-- Description -->
        <div class="text-gray-700 text-sm leading-relaxed space-y-4 text-left px-2">
          <p class="text-2xl">
            Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas.
          </p>
          <p>
            Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur.
          </p>
          <p>
            <i class="fas fa-check text-green-600 mr-2"></i>
            Aut eum totam accusantium voluptatem.
          </p>
          <p>
            <i class="fas fa-check text-green-600 mr-2"></i>
            Assumenda et porro nisi nihil nesciunt voluptatibus.
          </p>
          <p>
            <i class="fas fa-check text-green-600 mr-2"></i>
            Ullamco laboris nisi ut aliquip ex ea.
          </p>
          <p>
            Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.
          </p>
          <p>
            Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.
          </p>
        </div>
      </main>
    </div>

    <Newsletter />
    <div class="max-w-7xl mx-auto px-4">
    <Footer />
    </div>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';
import Newsletter from '~/components/Newsletter.vue';
import Footer from '~/components/Footer.vue';

const services = [
  'web-design',
  'product-management',
  'graphic-design',
  'marketing',
]

const selectedService = ref('web-design')

const formatServiceName = (name) =>
  name.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
</script>
