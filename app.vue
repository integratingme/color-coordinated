<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="container mx-auto px-4 py-16">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Color Coordinated
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          Welcome to your Nuxt.js + Tailwind CSS project!
        </p>
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <div class="w-20 h-20 bg-red-500 rounded-lg shadow-lg"></div>
          <div class="w-20 h-20 bg-blue-500 rounded-lg shadow-lg"></div>
          <div class="w-20 h-20 bg-green-500 rounded-lg shadow-lg"></div>
          <div class="w-20 h-20 bg-yellow-500 rounded-lg shadow-lg"></div>
          <div class="w-20 h-20 bg-purple-500 rounded-lg shadow-lg"></div>
          <div class="w-20 h-20 bg-pink-500 rounded-lg shadow-lg"></div>
        </div>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
          Get Started
        </button>
      </div>
    </div>
    <NuxtRouteAnnouncer />
  </div>
</template>
