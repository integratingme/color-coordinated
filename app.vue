<template>
  <div class="min-h-screen bg-private-light font-cera">
    <div class="container mx-auto px-4 py-16">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-corporate-primary mb-4 font-denver">
          Color Coordinated
        </h1>
        <p class="text-xl text-corporate-primary mb-12 font-cera font-light">
          Color & Typography Test
        </p>
        
        <!-- Typography Section -->
        <div class="mb-12">
          <h2 class="text-3xl font-semibold text-corporate-primary mb-6 font-denver">Typography</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <!-- Cera Pro -->
            <div class="bg-white p-6 rounded-xl shadow-lg border border-private-medium">
              <h3 class="text-2xl font-medium text-corporate-primary mb-4 font-cera">Cera Pro</h3>
              <div class="space-y-3 text-left">
                <p class="font-cera font-light text-corporate-primary">Light: The quick brown fox</p>
                <p class="font-cera font-normal text-corporate-primary">Regular: The quick brown fox</p>
                <p class="font-cera font-medium text-corporate-primary">Medium: The quick brown fox</p>
              </div>
            </div>
            
            <!-- Denver Serial -->
            <div class="bg-white p-6 rounded-xl shadow-lg border border-private-medium">
              <h3 class="text-2xl font-medium text-corporate-primary mb-4 font-denver">Denver Serial</h3>
              <div class="space-y-3 text-left">
                <p class="font-denver font-normal text-corporate-primary">Regular: The quick brown fox</p>
                <p class="font-denver font-medium text-corporate-primary">Medium: The quick brown fox</p>
                <p class="font-denver font-bold text-corporate-primary">Bold: The quick brown fox</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Farben Corporate -->
        <div class="mb-12">
          <h2 class="text-3xl font-semibold text-corporate-primary mb-6 font-denver">Farben Corporate</h2>
          <div class="flex flex-wrap justify-center gap-6 mb-8">
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 bg-corporate-primary rounded-xl shadow-lg"></div>
              <span class="text-sm mt-3 text-corporate-primary font-cera">corporate-primary</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 bg-corporate-overlay rounded-xl shadow-lg"></div>
              <span class="text-sm mt-3 text-corporate-primary font-cera">corporate-overlay</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 bg-corporate-footer rounded-xl shadow-lg"></div>
              <span class="text-sm mt-3 text-corporate-primary font-cera">corporate-footer</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 bg-corporate-text border-2 border-private-medium rounded-xl shadow-lg"></div>
              <span class="text-sm mt-3 text-corporate-primary font-cera">corporate-text</span>
            </div>
          </div>
        </div>

        <!-- Farben Private -->
        <div class="mb-12">
          <h2 class="text-3xl font-semibold text-corporate-primary mb-6 font-denver">Farben Private</h2>
          <div class="flex flex-wrap justify-center gap-6 mb-8">
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 bg-private-light rounded-xl shadow-lg"></div>
              <span class="text-sm mt-3 text-corporate-primary font-cera">private-light</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 bg-private-overlay rounded-xl shadow-lg"></div>
              <span class="text-sm mt-3 text-corporate-primary font-cera">private-overlay</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 bg-private-medium rounded-xl shadow-lg"></div>
              <span class="text-sm mt-3 text-corporate-primary font-cera">private-medium</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-24 h-24 bg-private-dark rounded-xl shadow-lg"></div>
              <span class="text-sm mt-3 text-corporate-text font-cera">private-dark</span>
            </div>
          </div>
        </div>
        
        <button class="bg-corporate-primary hover:bg-private-dark text-corporate-text font-semibold py-4 px-8 rounded-xl transition-colors duration-200 shadow-lg font-cera">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>
