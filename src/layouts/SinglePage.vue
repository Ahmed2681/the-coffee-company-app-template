<script setup></script>

<template>
  <section class="relative flex h-screen w-4/6 items-center self-center bg-[#967259] px-10">
    <!--#region left-spirals -->
    <!-- first sprial -->
    <img
      class="absolute top-0 -left-5 z-10 w-8"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />
    <img
      class="absolute top-1 -left-6 z-20 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <!-- second sprial -->
    <img
      class="absolute -left-5 z-10 w-8"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />
    <img
      class="absolute -left-6 z-20 mb-3 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <!-- third sprial -->
    <img
      class="absolute bottom-0 -left-5 z-10 w-8"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />
    <img
      class="absolute bottom-4 -left-6 z-20 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <!--#endregion -->

    <!--#region right-spirals -->
    <!-- first sprial -->
    <img
      class="absolute -top-3 -right-5 z-10 w-8 rotate-180"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />
    <img
      class="absolute top-1 -right-6 z-20 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <!-- second sprial -->
    <img
      class="absolute -right-5 z-10 mb-6 w-8 rotate-180"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />
    <img
      class="absolute -right-6 z-20 mb-3 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <!-- third sprial -->
    <img
      class="absolute -right-5 bottom-4 z-10 w-8 rotate-180"
      src="@/assets/images/notebook-spiral.png"
      alt="notebook-spiral"
      draggable="false"
    />
    <img
      class="absolute -right-6 bottom-4 z-20 w-[25px]"
      src="@/assets/images/spiral-holes.png"
      alt="spiral-holes"
      draggable="false"
    />
    <!--#endregion -->
    <slot></slot>
  </section>
</template>
