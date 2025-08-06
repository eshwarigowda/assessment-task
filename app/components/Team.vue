<template>
  <section id="team" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 lg:py-0">
    <div class="text-center mb-6 relative -mt-12">
        <!-- Background-->
        <h2 class="text-6xl font-semibold text-gray-100 absolute inset-0 flex items-center justify-center select-none -mt-4">
          TEAM
        </h2>
        <h3 class="relative text-4xl font-medium text-gray-600 pt-20">TEAM</h3>
        
        <p class="relative text-gray-800  mt-6 text-[1.111rem]">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

    <div class="w-full mt-16 px-0 sm:px-2">
    <div class="max-w-9xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
      <div v-for="(member, index) in teamMembers" :key="index" class="relative">
        <!-- Card Image -->
        <div class="overflow-hidden shadow-lg">
            <img :src="member.image" alt="Team member" class="w-[700px] h-100 object-cover" />
        </div>


        <!-- Overlapping Info -->
        <div
          class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-11/12 bg-white shadow-md p-4 text-left"
        >
          <h3 class="text-lg font-semibold text-gray-600">{{ member.name }}</h3>
           <div class="h-[1px] w-16 bg-gray-500 mt-1 ml-0"></div>
          
          <p class="text-sm text-gray-500 italic">{{ member.role }}</p>
          <div class="flex justify-end mt-3 text-gray-600">
            <i class="fab fa-x-twitter hover:text-green-700 cursor-pointer"></i>
            <i class="fab fa-facebook-f hover:text-green-700 cursor-pointer"></i>
            <i class="fab fa-instagram hover:text-green-700 cursor-pointer"></i>
            <i class="fab fa-linkedin-in hover:text-green-700 cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </section>
</template>

<script setup>
const teamMembers = [
  {
    name: "Walter White",
    role: "Chief Executive Officer",
    image: "/image/team/team-1.jpg"
  },
  {
    name: "Sarah Jhonson",
    role: "Product Manager",
    image: "/image/team/team-2.jpg"
  },
  {
    name: "William Anderson",
    role: "CTO",
    image: "/image/team/team-3.jpg"
  }
];
</script>
