<template>
  <vs-row
    class="image-container"
    vs-justify="flex-start"
    vs-align="center"
    vs-wrap="wrap"
  >
    <vs-col
      v-for="image in images"
      :key="image.id"
      class="content"
      vs-w="3"
      vs-type="flex"
      vs-justify="center"
      vs-align="center"
    >
      <img
        width="150"
        height="100"
        :src="image.src"
        :alt="image.alt"
      >
    </vs-col>
  </vs-row>
</template>

<script>
export default {
    name: 'AppImages',
    data() {
        return {
            images: [{
                    id: 'book1',
                    src: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_' +
                        '2000149920009280219_363765.jpg',
                    alt: 'Book'
                },
                {
                    id: 'book2',
                    src: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_' +
                        '2000149920009280219_363765.jpg',
                    alt: 'Book'
                },
                {
                    id: 'book3',
                    src: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_' +
                        '2000149920009280219_363765.jpg',
                    alt: 'Book'
                },
                {
                    id: 'book4',
                    src: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_' +
                        '2000149920009280219_363765.jpg',
                    alt: 'Book'
                },
                {
                    id: 'book5',
                    src: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_' +
                        '2000149920009280219_363765.jpg',
                    alt: 'Book'
                },
                {
                    id: 'book6',
                    src: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_' +
                        '2000149920009280219_363765.jpg',
                    alt: 'Book'
                },

            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.content{
    padding: 15px 0;
}
</style>
