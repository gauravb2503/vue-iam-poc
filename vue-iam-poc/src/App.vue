<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
import { getCurrentUser, fetchAuthSession } from "@aws-amplify/auth";
import { ref, onMounted } from 'vue';
import "@aws-amplify/ui-vue/styles.css";

const username = ref<string>("");
const userId = ref<string>("");
let userAWSDetails = ref<{}>({});

onMounted(async () => {
  try {
    const user = await getCurrentUser();
    const session = await fetchAuthSession();
    userAWSDetails.value = session?.tokens?.idToken?.payload;
    username.value = user.username;
    userId.value = user.userId;

    console.log("username", username.value);
    console.log("user id", userId.value);
    console.log('userAwsDetails', userAWSDetails.value)
  } catch (error) {
    console.error("Error getting current user", error);
  }
});
</script>

<template>
  <div class="container">
    <h1>Identity and access management using AWS + Vue 3</h1>
    <Suspense>
      <template #default>
        <authenticator :signUpAttributes="['email', 'name']" :social-providers="['google']">
          <template v-slot="{ user, signOut }">
            <div class="auth-content">
              <h1>Hello {{ user.username }}</h1>
              <button class="sign-out-button" @click="signOut">Sign Out</button>
              <router-view />
            </div>
          </template>
        </authenticator>
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f2f5;
}

.container h1 {
  padding: 20px;
}

.auth-content {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
}

.sign-out-button {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

.sign-out-button:hover {
  background-color: #ff7875;
}

p {
  font-size: 1.2em;
  color: #555;
}
</style>
