<template>
  <vs-row
    vs-justify="flex-start"
    vs-align="center"
    vs-wrap="wrap"
  >
    <vs-col
      v-for="video in videos"
      :key="video.id"
      class="content"
      vs-w="3"
      vs-type="flex"
      vs-justify="center"
      vs-align="center"
    >
      <iframe
        width="150"
        height="100"
        :src="video.src"
        :alt="video.alt"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </vs-col>
  </vs-row>
</template>
<script>
export default {
    name: 'AppVideo',
    data: function () {
        return {
            videos: [{
                    id: 'video1',
                    src: 'https://www.youtube.com/embed/ANtSWq-zI0s',
                    alt: 'Video'
                },
                {
                    id: 'video2',
                    src: 'https://www.youtube.com/embed/ANtSWq-zI0s',
                    alt: 'Book'
                },
                {
                    id: 'video3',
                    src: 'https://www.youtube.com/embed/ANtSWq-zI0s',
                    alt: 'Book'
                },
                {
                    id: 'video4',
                    src: 'https://www.youtube.com/embed/ANtSWq-zI0s',
                    alt: 'Book'
                },
                {
                    id: 'video5',
                    src: 'https://www.youtube.com/embed/ANtSWq-zI0s',
                    alt: 'Book'
                },
                {
                    id: 'video6',
                    src: 'https://www.youtube.com/embed/ANtSWq-zI0s',
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
