<template>
  <div class="bg-panel" >
    <div class="mx-10 my-10">
      <v-col ma="4">
        <v-row md="12">
          <h1 class="glo-text-title mb-3">Your Team</h1>
        </v-row>
        <v-row md="12">
          <h3 class=" font-weight-medium glo-text-title pr-10">Manage or create business cards for your team. If your coworkers create company business cards through the app, they will appear under requests. Users won’t be able to create verified business cards associated to your company, unless accepted your team.</h3>
        </v-row>
      </v-col>
    </div>
    <div class="mx-10 mt-10 mb-6">
      <div class="search-panel">
        <div class="search">
            <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
            </button>
            <input type="text" class="searchTerm" placeholder="Search by name and position">
        </div>
        <div class="add-button" @click="addMemberVisible = true">
          <a target="_blank" rel="noopener"><label class="add-button-text">Add Members</label></a>
        </div>
      </div>
    </div>
    <div class="mx-10">
      <v-flex md="12">
         <v-app style="background-color: #CFCED8;" class="ma-n4">
            <v-container>
              <table id="teammates">
                <tr class="head-section">
                  <th style="width: 40%;">Team Member</th>
                  <th style="width: 10%;"></th>
                  <th style="width: 10%;"></th>
                  <th style="width: 24%;">Platform Access</th>
                  <th style="width: 8%;"></th>
                  <th style="width: 8%;"></th>
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
                      class="ml-2"
                      >
                    </v-img>
                  </td>
                  <td><a href="" style="color: #2C305D;"><span class="font-weight-medium glo-text-title">View Card</span></a></td>
                  <td>
                    <select name="platform_access" id="pAccess" class="form-control role_select">
                      <option value="admin">Admin</option>
                      <option value="view-only">View-Only</option>
                    </select>
                  </td>
                  <td><v-img src="../assets/images/Edit icon.svg" height="16" width="16"></v-img></td>
                  <td><v-icon style="color:red;" height="16" width="16">fas fa-times-circle</v-icon></td>
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
                      class="ml-2"
                      >
                    </v-img>
                  </td>
                  <td><a href="" style="color: #2C305D;"><span class="font-weight-medium glo-text-title">View Card</span></a></td>
                  <td>
                    <select name="platform_access" id="pAccess" class="form-control role_select">
                      <option value="admin">Admin</option>
                      <option value="view-only">View-Only</option>
                    </select>
                  </td>
                  <td><v-img src="../assets/images/Edit icon.svg" height="16" width="16"></v-img></td>
                  <td><v-icon style="color:red;" height="16" width="16">fas fa-times-circle</v-icon></td>
                </tr>
              </table>
            </v-container>
        </v-app>
      </v-flex>
    </div>
    <AddMember :status="createPostStatus" :show="addMemberVisible" :detail="createPostDetail" @close="addMemberVisible = false"></AddMember>
  </div>
</template>
<script>
import AddMember from '../components/AddMember.vue';
  export default {
    components: {
      AddMember
    },
    data: () => ({
      items: ['Key1', 'Key2'],
      value: ['Key1', 'Key2'],
      jobs: ['Designer', 'Dev'],
      job: ['Designer', 'Dev'],
        singleSelect: false,
        selected: [],
      headers: [
        {
          text: 'PICTURE',
          align: 'right',
          sortable: false,
          value: 'avatar',
        },
        { text: 'APPLICANT', value: 'name', align: 'left',},
        { text: 'APPLIED ON', value: 'applied' },
        { text: 'PROGRESS', value: 'progress' },
        { text: 'RATING', value: 'rating' },
        { text: '', value: 'action', sortable: false },
      ],
      search:'',
      addMemberVisible: false

    }),
   

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          { avatar: '/img1.png' ,
            name: 'Frozen Yogurt',
            applied: '04/4/2019',
            progress: 70,
            rating: 4,
          },
          {
               avatar: '/img2.png',
            name: 'Ice cream sandwich',
            applied: '30/11/2019',
           
            progress: 56,
            rating: 2,
          },
          { avatar: '/img3.png',
            name: 'Eclair',
            applied: '17/11/2019',
            progress: 66,
            rating: 5,
          },
          { avatar: '/img4.png',
            name: 'Jelly bean',
           applied: '13/09/2019',
            progress: 81,
            rating: 2,
          },
          { avatar: '/img5.png',
            name: 'Lollipop',
             applied: '21/05/2018',
            progress: 64,
            rating: 0,
          },
          { avatar: '/img1.png',
            name: 'Honeycomb',
            applied: '08/07/2019',
            progress: 95,
            rating: 4,
          },
          { avatar: '/img2.png',
            name: 'Donut',
             applied: '05/04/2019',
            progress: 43,
            rating: 5,
          },
          { avatar: '/img3.png',
            name: 'KitKat',
            applied: '10/03/2018',
            progress: 60,
            rating: 3,
          },
        ]
      },
    },
  }
</script>

<style scoped>
@import '../assets/styles/common.css';

.search-panel{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}


.div{
  overflow: auto;
}


</style>