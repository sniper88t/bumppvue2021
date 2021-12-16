<template>
  <div class="bg-panel" >
    <div class="mx-12 mt-12 mb-8">
      <v-col ma="4">
        <v-row md="12">
          <p class="head-title glo-text-title mb-3">Your Team</p>
        </v-row>
        <v-row md="12">
          <p class="head-subtitle glo-text-title pr-10">Manage or create business cards for your team. If your coworkers create company business cards through the app, they will appear under requests. Users won’t be able to create verified business cards associated to your company, unless accepted your team.</p>
        </v-row>
      </v-col>
    </div>
    <div class="mx-12 mt-10 mb-5">
      <div class="search-panel">
        <div class="search">
            <button type="submit" class="searchButton">
                <i class="fa fa-search" style="width:18px"></i>
            </button>
            <input type="text" class="searchTerm" id="web-searchbox" placeholder="Search by name and position">
            <input type="text" class="searchTerm" id="mobile-searchbox" placeholder="Search">
        </div>
        <div class="add-button">
          <a target="_blank" rel="noopener"><label class="add-button-text">Add Members</label></a>
        </div>
      </div>
    </div>
    <div class="mx-16">
      <v-app style="background-color: #CFCED8;" class="ma-n4">
        <table id="teammates">
          <tr class="head-section">
            <th style="width: 40%;">Team Member</th>
            <th style="width: 10%;"></th>
            <th style="width: 14%;"></th>
            <th style="width: 26%;">Platform Access</th>
            <th style="width: 5%;"></th>
            <th style="width: 5%;"></th>
          </tr>
          <tr>
            <td>
              <div class="row">
                <div class="tbl_img"><v-avatar size="30px"><img src="/img1.png" ></v-avatar></div>
                <div class="col px-6">
                  <div class="glo-text-title glo-text-format">Joshua Pang</div>
                  <div class="glo-text-format" style="color:#565656">Tester</div>
                </div>
              </div>
            </td>
            <td>
                <v-img 
                  src="../assets/images/Indonesia.png"
                  height="20"
                  width="30"
                  >
                </v-img>
            </td>
            <td><a href="" style="color: #2C305D;"><span class="font-weight-medium glo-text-title responsive-card">View Card</span></a></td>
            <td>
              <select name="platform_access" class="form-control role_select">
                <option value="admin">Admin</option>
                <option value="view-only">View-Only</option>
              </select>
            </td>
            <td><v-img src="../assets/images/Edit icon.svg" height="16" width="16" class="cursor-section"  @click="addMemberVisible = true"></v-img></td>
            <td><v-icon style="color:red;" height="16" width="16" class="cursor-section">fas fa-times-circle</v-icon></td>
          </tr>
          <tr>
            <td>
              <div class="row ">
                <div class="tbl_img"><v-avatar size="30px"><img src="/img2.png" ></v-avatar></div>
                <div class="col px-6">
                  <div class="glo-text-title glo-text-format">Jane Lee</div>
                  <div class="glo-text-format" style="color:#565656">Backend Engineer</div>
                </div>
              </div>
            </td>
            <td>
              <v-img 
                src="../assets/images/Singapore.png"
                height="20"
                width="30"
                >
              </v-img>
            </td>
            <td><a href="" style="color: #2C305D;"><span class="font-weight-medium glo-text-title responsive-card">View Card</span></a></td>
            <td>
              <select name="platform_access" class="form-control role_select">
                <option value="admin">Admin</option>
                <option value="view-only">View-Only</option>
              </select>
            </td>
            <td><v-img src="../assets/images/Edit icon.svg" height="16" width="16" class="cursor-section"  @click="addMemberVisible = true"></v-img></td>
            <td><v-icon style="color:red;" height="16" width="16">fas fa-times-circle</v-icon></td>
          </tr>
          <tr>  
            <td>
              <div class="row ">
                <div class="tbl_img"><v-avatar size="30px"><img src="/img3.png" ></v-avatar></div>
                <div class="col px-6">
                  <div class="glo-text-title glo-text-format">Nicolas Ngoh</div>
                  <div class="glo-text-format" style="color:#565656">QA Engineer</div>
                </div>
              </div>
            </td>
            <td>
              <v-img 
                src="../assets/images/Malaysia.png"
                height="20"
                width="30"
                >
              </v-img>
            </td>
            <td><a href="" style="color: #2C305D;"><span class="font-weight-medium glo-text-title responsive-card">View Card</span></a></td>
            <td>
              <select name="platform_access" class="form-control role_select">
                <option value="admin">Admin</option>
                <option value="view-only">View-Only</option>
              </select>
            </td>
            <td><v-img src="../assets/images/Edit icon.svg" height="16" width="16" class="cursor-section" @click="addMemberVisible = true"></v-img></td>
            <td><v-icon style="color:red;" height="16" width="16">fas fa-times-circle</v-icon></td>
          </tr>
        </table>
      </v-app>
    </div>
    <AddMember 
      :status="addMemberStatus" 
      :show="addMemberVisible" 
      :detail="addMemberDetail" 
      @close="addMemberVisible = false"
      @saveStatus="editConfirm=true"
    >
    </AddMember>
    <EditConfirm :show="editConfirm" @close="editConfirm = false"></EditConfirm>
  </div>
</template>
<script>
import AddMember from '../components/AddMember.vue';
import EditConfirm from '../components/EditConfirm.vue';
  export default {
    components: {
      AddMember,
      EditConfirm
    },
    data: () => ({
      search:'',
      addMemberStatus:'',
      addMemberDetail: {},
      addMemberVisible: false,
      editConfirm: false,

    }),
   

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
      },
    },
  }
</script>

<style scoped>
@import '../assets/styles/common.css';
@import '../assets/styles/responsive.css';

.search-panel{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.head-title{
  font-size: 30px;
  font-weight: 600;
}

.head-subtitle{
 font-size: 16px;
 font-weight: 400;
}
.div{
  overflow: auto;
}
::placeholder {
  color: #565656;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  vertical-align: center;
}

</style>