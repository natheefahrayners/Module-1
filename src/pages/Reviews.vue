<template>
  <div>
    <NavBar />

    <div class="container">
      <h2 class="mb-3">Performance Reviews</h2>

      <div class="card p-3 mb-4">
        <h5>Add Review</h5>

        <div class="row g-2">
          <div class="col-md-4">
            <select class="form-control form-control-sm" v-model="empId">
              <option disabled value="">Employee</option>
              <option v-for="e in hr.employees" :value="e.id">{{ e.firstName }} {{ e.lastName }}</option>
            </select>
          </div>

          <div class="col-md-8">
            <input class="form-control form-control-sm" v-model="comment" placeholder="Review comment" />
          </div>
        </div>

        <button class="btn btn-primary btn-sm mt-3" @click="add">Add Review</button>
      </div>

      <div class="card p-3">
        <h5>Recent Reviews</h5>
        <ul class="list-group">
          <li v-for="r in hr.reviews" :key="r.id" class="list-group-item">
            <strong>{{ getName(r.employeeId) }}</strong>
            <span class="text-muted small">({{ r.date.split('T')[0] }})</span>
            <br />
            {{ r.comment }}
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import { ref } from 'vue'
import { useHrStore } from '../store/hrStore'

const hr = useHrStore()
const empId = ref("")
const comment = ref("")

function add() {
  if (!empId.value || !comment.value) return alert("Fill all fields")
  hr.addReview({ employeeId: empId.value, comment: comment.value })
  empId.value = comment.value = ""
}

function getName(id) {
  const e = hr.employees.find(x => x.id === id)
  return e ? `${e.firstName} ${e.lastName}` : "Unknown"
}
</script>
