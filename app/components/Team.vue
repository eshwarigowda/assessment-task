<script setup>
import Card from '@/components/Card.vue'

const teamMembers = [
  {
    name: "Walter White",
    role: "Chief Executive Officer",
    image: "/image/team/team-1.jpg",
    socials: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sarah Jhonson",
    role: "Product Manager",
    image: "/image/team/team-2.jpg",
    socials: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "William Anderson",
    role: "CTO",
    image: "/image/team/team-3.jpg",
    socials: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
]
</script>

<template>
  <section id="team" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 lg:py-0">
      <div class="text-center mb-6 relative -mt-12">
        <h2 class="text-5xl sm:text-6xl font-semibold text-gray-100 absolute inset-0 flex items-center justify-center select-none -mt-4">TEAM</h2>
        <h3 class="relative text-3xl sm:text-4xl font-medium text-gray-600 pt-20">TEAM</h3>
        <p class="relative text-gray-800 mt-6 text-base sm:text-lg max-w-3xl mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div class="w-full mt-16 px-4 sm:px-2">
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8 sm:px-0">
          <div v-for="(member, index) in teamMembers" :key="index" class="mb-12 sm:mb-0">
          <Card
            :image="member.image"
            :title="''"            
            :description="''"      
            height="h-72 sm:h-96 lg:h-[350px]"
            imageCover
            bg="bg-white"
          >
            <template #info>
              <div
                class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-11/12 bg-white shadow-md p-4 rounded-md z-20 text-left"
              >
                <h3 class="text-lg font-semibold text-gray-800">{{ member.name }}</h3>
                <div class="h-[1px] w-16 bg-gray-500 mt-1 mb-3"></div>
                <p class="text-sm italic text-gray-600 mb-3">{{ member.role }}</p>

                <div class="flex justify-end space-x-4 text-gray-600">
                  <a href="#" class="hover:text-green-700" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="hover:text-green-700" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="hover:text-green-700" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                  <a href="#" class="hover:text-green-700" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </template>
          </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
