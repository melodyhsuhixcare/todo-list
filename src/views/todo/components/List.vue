<template lang="pug">
v-card.mx-auto(width="70%")
  v-toolbar(color="black", dark)
    v-toolbar-title Todo
    v-spacer

  v-list.overflow-y-auto(
    min-height="40vh",
    max-height="70vh",
    flat
  )
    v-list-item-group(
      active-class,
      mandatory
    )
      div(
        v-if="todoTasks && todoTasks.length !== 0"
      )
        v-list-item(
          v-for="todoTask in todoTasks",
          :key="todoTask.id"
        )
          template(
            #default="{ active }"
          )
            v-list-item-action
              v-checkbox(
                :input-value="todoTask.isDone",
                @click="didTask(todoTask.id)"
              )
            v-list-item-content
              .todo-task {{ todoTask.value }}
            v-list-item-action
              v-btn(
                icon,
                outlined,
                small,
                @click="deleteTask(todoTask.id)"
              )
                v-icon(size="18") mdi-trash-can
      div(v-else)
        v-card-subtitle There is nothing left to do! Congrats! 🥳
</template>

<script>
import { setTasks } from '../../../utils/local-storage';
import { showDangerousToast, showSuccessfulToast } from '../../../utils/toast';

export default {
  data() {
    return {};
  },
  computed: {
    todoTasks() {
      return this.$store.getters.todoTasks;
    }
  },
  methods: {
    deleteTask(taskId) {
      this.$store.dispatch('deleteTask', taskId);
      setTasks();

      showDangerousToast('You have deleted a task! 😨');
    },
    didTask(taskId) {
      this.$store.dispatch('didTask', taskId);
      setTasks();

      showSuccessfulToast('You have done a task! 👏🏻👏🏻👏🏻');
    }
  }
};
</script>😰

<style lang="scss" scoped>
.todo-task {
  overflow: auto;
}

.v-card__subtitle {
  text-align: center;
}
</style>
