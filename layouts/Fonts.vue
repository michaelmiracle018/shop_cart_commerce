<template></template>
<script>
export default {}
</script>

<style>
@font-face {
  font-family: 'roboto';
  src: url('../assets/font/Roboto-Bold.ttf');
}
@font-face {
  font-family: 'roboto-bold';
  src: url('~/assets/font/Roboto-Bold.ttf');
}
@font-face {
  font-family: 'montserrat';
  src: url('~/assets/font/Montserrat/static/Montserrat-Regular.ttf');
}
@font-face {
  font-family: 'montserrat-bold';
  src: url('~/assets/font/Montserrat/static/Montserrat-Bold.ttf');
}
/* @font-face {
  font-family: 'poppins-bold';
  src: url('~/assets/font/Poppins/Poppins-ExtraBold.otf');
}
@font-face {
  font-family: 'poppins-medium';
  src: url('~/assets/font/Poppins/Poppins-Bold.otf');
} */
template {
  font-family: 'roboto' !important;
}
.header__container {
  width: 100%;
}
.sb__container,
.main__container {
  padding: 0px !important;
  font-family: 'roboto' !important;
}
.main__container {
  background: #f6fdff !important;
  font-family: 'roboto' !important;
  flex-direction: column;
}
.sb__container {
  height: 900px;
  width: 100%;
  background-color: #103753;
  overflow: auto;
}
.row__on__dashboard {
  height: auto;
  border: 1px solid black;
}
.btn__ {
  border: none;
  border-radius: 500px;
  color: #103753;
  height: 30px;
  width: 105px;
  font-size: 11px;
  position: relative;
  margin: auto;
  background: rgba(16, 55, 83, 0.25);
}

html::-webkit-scrollbar {
  width: 8px;
  border-radius: 200px;
}

html::-webkit-scrollbar-thumb {
  background: #c4c4c4;
}

.sb__container::-webkit-scrollbar {
  width: 0px;
}
.m__table___ {
  border-collapse: collapse;
  border-radius: 7px;
  overflow: hidden;
  width: 100%;
  font-size: 12px;
  margin-top: 25px;
  box-shadow: 8px 14px 20px rgba(201, 232, 242, 0.2);
}
.m__table___ tr {
  width: 100%;
  height: 37px;
}
.m__table___ td {
  padding: 0.5em;
  background: #fff;
  border-top: 1px solid #c4c4c4;
  width: 14.3%;
  color: black;
}
.table____wrap {
  width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 0px solid #000;
}
thead {
  background: #aaa;
}

.m__table___ th {
  padding: 0em;
  background: #f1f1f1;
  border-bottom: 1px solid #c4c4c4;
  color: #000;
  height: 35px;
  font-size: 11px;
}
.___XCDHGS {
  width: 100%;
  display: flex;
  border: 0px solid #000;
  height: 40px;
  margin-top: 35px;
}
.___XCDHGS .heading___ {
  font-family: 'roboto-bold';
  position: relative;
  float: left;
  font-size: 32px;
  color: black;
  top: -8px;
}
.___XCDHGS__child {
  justify-content: space-evenly;
  height: 100%;
  border: 0px solid #000;
  width: 33.33%;
  display: flex;
}
.___XCDHGS__child__child {
  justify-content: space-evenly;
  width: 33.33%;
  border: 0px solid red;
  height: 100%;
  padding: 0px;
}
.paginate__ {
  min-width: 200px;
  border: 0px solid #000;
  float: right;
  position: relative;
  margin-top: 4em;
}
.paginate__ button {
  background: #fff;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 100px;
  color: #103753;
  box-shadow: 8px 14px 20px rgba(201, 232, 242, 0.5);
  font-size: 11px;
}
.paginate__ col {
  font-size: 11px;
  color: #103753;
}
.pg_btn_plain__ {
  background-color: transparent;
}
.m__table___ .__entity__left_pad {
  padding-left: 2em;
}
</style>
