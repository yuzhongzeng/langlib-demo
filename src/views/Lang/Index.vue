<template>
  <div class="fi-page page-index">
    <div class="fi-page__header">
      <FiBreadcrumb />
    </div>
    <div class="fi-page__body">
      <div class="fi-page__search fi-panel">
        <div class="fi-search">
          <div class="fi-search__bottom">
            <div class="fi-search__left"></div>
            <div class="fi-search__right">
              <div class="fi-btn fi-btn--default">新增</div>
            </div>
          </div>
        </div>
      </div>
      <div class="fi-page__main fi-panel">
        <div class="fi-table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              type="index"
              label="#"
              width="100"
            ></el-table-column>
            <el-table-column prop="title" label="语言"></el-table-column>
            <el-table-column prop="address" label="操作" width="140">
              <div class="fi-btn fi-btn--primary fi-btn--small">修改</div>
              <div class="fi-btn fi-btn--secondary fi-btn--small">删除</div>
            </el-table-column>
          </el-table>
          <!-- <div class="fi-table__bottom">
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
          </div> -->
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
          title: "中文",
          sort: 1
        },
        {
          title: "英文",
          sort: 2
        },
        {
          title: "韩文",
          sort: 3
        },
        {
          title: "繁体",
          sort: 4
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
