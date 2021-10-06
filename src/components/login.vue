<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
    </v-app-bar>   
    <v-main>
      <v-container>       
        <v-card class="pa-3">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="username"
              :counter="10"
              :rules="nameRules"
              label="이름"
              required
            />       

            <v-btn 
              :disabled="!valid"
              color="success"
              class="mr-4"  
              router-view=""            
              @click= validate()
            >
              확인
            </v-btn>
          </v-form>
        </v-card>
      </v-container>  
    </v-main>  
  </v-app>  
</template>

<script>
//import rlas from '@/components/rlas';

export default {
  name: 'login',

  data: () => ({
    valid: true,
    username: '',    
    nameRules: [
      v => !!v || '이름을 적어주세요.',
      v => (v && v.length <= 10) || '최대 10글자까지 가능합니다.',
    ],    
  }),

  methods: {
    validate () {
      this.$cookies.config('7d')
      this.$refs.form.validate()  
      this.$cookies.set('name', this.username);      
      this.$router.push({name: 'rlas'})      
//      this.$router.push({name: 'rlas', query: {name: this.username}})    
    },   
  },
}
</script>
<style>

</style>
