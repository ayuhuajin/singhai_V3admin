import request from "@/services/http"

export function getName() {
  // return [{ name: 11 }];
  return request({
    url: "/api/list",
    method: "get",
  })
}

export function postName() {
  return request({
    url: "/api/list",
    method: "get",
  })
}
