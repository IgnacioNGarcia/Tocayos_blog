Vue.component('toast', {
    props: {
        showToast: Boolean, //Maneja si se muestra o no,
        toastMessage: ""
    },
    methods: {
    },
    template: `
    <div v-if="showToast" class="toast-container position-fixed bottom-0 end-0 p-3">
        <div class="toast-header">
          <img src="https://i.pinimg.com/originals/b9/e2/b3/b9e2b367ec3cdd3db683803f36e40b64.jpg" class="rounded me-2" alt="..." style="height: 25px; width: 25px;">
          <strong class="me-auto">Tocayo's blog</strong>
          <small>Now</small>
        </div>
        <div class="toast-body">
          {{ toastMessage }}
        </div>
    </div>
  `,
    
  });
  