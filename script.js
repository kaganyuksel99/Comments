const parentList = document.getElementById("list");
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    let result = "";
    data.comments.map((comment, index) => {
      result += `<div class="${
        index == 0 ? "d-flex flex-start" : "d-flex flex-start mt-4"
      }" >
      <img
        class="rounded-circle shadow-1-strong me-3"
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
        alt="avatar"
        width="65"
        height="65"
      />
      <div class="flex-grow-1 flex-shrink-1" >
        <div>
          <div
            class="d-flex justify-content-between align-items-center "
          >
            <p class="mb-3">
            ${comment.title}
              
            </p>

          </div>
          <p class="small mb-0">
            ${comment.content}
          </p>
        </div>
        ${
          comment.comment_to_comment
            ? `<div class="d-flex flex-start mt-3">
                <a class="me-3" href="#">
                  <img
                    class="rounded-circle shadow-1-strong"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(11).webp"
                    alt="avatar"
                    width="65"
                    height="65"
                  />
                </a>
                <div class="flex-grow-1 flex-shrink-1">
                  <div>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <p class="mb-1">
                        Simona Disa
                        
                      </p>
                    </div>
                    <p class="small mb-0">
                      ${comment.comment_to_comment}
                    </p>
                  </div>
                </div>
              </div>`
            : ""
        }
      </div>
    </div>`;
    });
    parentList.innerHTML = result;
  });
