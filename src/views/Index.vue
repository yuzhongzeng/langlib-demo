<template>
  <div class="fi-page page-index">
    <div class="fi-page__header">
      <div class="fi-breadcrumb">导航</div>
    </div>
    <div class="fi-page__body">
      <div class="fi-page__search fi-panel">
        <div class="fi-search">
          <div class="fi-search__form">
            <el-form
              ref="searchForm"
              :model="searchForm.data"
              inline
              size="small"
            >
              <el-form-item label="姓名" prop="name">
                <el-input
                  v-model="searchForm.data.name"
                  placeholder="请输入姓名查询"
                ></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="phone">
                <el-input
                  v-model="searchForm.data.phone"
                  placeholder="请输入手机号查询"
                ></el-input>
              </el-form-item>

              <el-form-item label="申请日期" prop="createTime">
                <el-date-picker
                  v-model="searchForm.data.createTime"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['00:00:00', '23:59:59']"
                  :clearable="false"
                ></el-date-picker>
              </el-form-item>
            </el-form>
          </div>
          <div class="fi-search__bottom">
            <div class="fi-search__left">
              <div class="fi-btn fi-btn--default">导出</div>
            </div>
            <div class="fi-search__right">
              <div class="fi-btn fi-btn--secondary">重置</div>
              <div class="fi-btn fi-btn--primary">查询</div>
            </div>
          </div>
        </div>
      </div>
      <div class="fi-page__main fi-panel">
        <div class="fi-table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
          <div class="fi-table__bottom">
            <el-pagination
              size-change="handleSizeChange"
              current-change="handleCurrentChange"
              :current-page="tableConfig.params.pageNum"
              :page-sizes="tableConfig.pageSizes"
              :page-size="tableConfig.params.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tableConfig.total"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        data: {
          name: "",
          phone: "",
          serviceType: "",

          serviceAddress: [],
          createTime: []
        }
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],

      tableConfig: {
        data: [],
        selected: [], // 选中的_id 集合

        total: 0,
        pageSizes: [10, 20, 30, 40, 50, 100],

        params: {
          pageNum: 1, // 当前页
          pageSize: 10 // 每页数量
        }
      }
    };
  }
};
</script>

<style></style>
