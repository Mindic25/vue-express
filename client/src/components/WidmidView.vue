<template>
 <section id="widmidview">

     <mdb-card style="margin-left:10px; height:950px">
       <mdb-card-body >
       <v-client-table :data="tableData" :columns="columns" :options="options" arrows>
         
      </v-client-table>

      </mdb-card-body>
     </mdb-card>
 </section>
</template>

<script>
import axios from "axios";
import { type } from "os";
import { mdbCard, mdbCardBody } from "mdbvue";

export default {
  name: "test",
  components: {
    mdbCard,
    mdbCardBody
  },
  data() {
    return {
      columns: ["first", "last", "DOB", "phone"],
      tableData: [],
      options: {
        headings: {
          first: "First Name",
          last: "Last Name",
          DOB: "Date of Birth",
          phone: "Phone Number"
        },

        sortable: ["first"],
        filterable: ["first", "last"],
        filterableByColumn: false,
        texts: {
          filter: "",
          filterPlaceholder: "search"
        }
      }
    };
  },
  mounted() {
    axios
      .get("http://localhost:4241/users/profile/widemidfieldview")
      .then(res => {
        this.tableData = res.data;
      });
  }
};
</script>

<style>
#widmidview {
  margin-top: 10px;
  text-align: center;
}
tr {
  border: 1px solid #ececec;
}
th {
  background: #eceff1;
}

.pagination {
  position: relative;
  right: -430px;

  padding: 10px;
}
.text-center {
  position: relative;
  left: 420px;
}
</style>
