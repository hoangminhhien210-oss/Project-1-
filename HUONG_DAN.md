# Hướng dẫn đăng website & phân quyền chỉnh sửa

## Cấu trúc thư mục
| File | Dùng để |
|---|---|
| `content.js` | **Toàn bộ nội dung** (giới thiệu, thành viên, project, liên hệ). Chỉ cần sửa file này. |
| `index.html`, `styles.css`, `app.js` | Khung, giao diện, hiệu ứng — không cần đụng. |
| `assets/img/` | Ảnh đại diện (vd `dao.jpg`, `thu.jpg`…) |
| `assets/cv/` | File CV PDF |
| `assets/report/` | Báo cáo Vinamilk PDF + ảnh preview trang |

## Đăng lên GitHub Pages (miễn phí, ai cũng xem được, chỉ người được cấp quyền mới sửa được)
1. Tạo tài khoản tại github.com → **New repository** → đặt tên (vd `portfolio`) → chọn **Public** → Create.
2. Bấm **uploading an existing file** → kéo thả toàn bộ file/thư mục trong gói này → **Commit changes**.
3. Vào **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
4. Sau 1–2 phút, web có link dạng `https://<username>.github.io/portfolio/` → gửi link này cho nhà tuyển dụng.

## Phân quyền chỉnh sửa
- Mặc định: **chỉ chủ repo được sửa**; người xem chỉ đọc được.
- Cấp quyền sửa: **Settings → Collaborators → Add people** → nhập username/email của người bạn tin tưởng → họ nhận lời mời và có quyền sửa.
- Thu hồi quyền: cùng trang Collaborators → **Remove**.
- (Tuỳ chọn, an toàn hơn) **Settings → Branches → Add rule** cho `main` → bật *Require a pull request before merging*: mọi thay đổi của người khác phải được bạn duyệt trước khi lên web.

## Cách sửa nội dung (cho bạn & người được cấp quyền)
1. Mở `content.js` trên GitHub → bấm biểu tượng ✏️ (Edit).
2. Sửa chữ trong dấu `"..."` (các chỗ có `// TODO` là cần điền: email, LinkedIn, CV, họ tên đầy đủ thành viên, ảnh).
3. Bấm **Commit changes** → web tự cập nhật sau ~1 phút.

## Thêm ảnh / CV
Upload ảnh vào `assets/img/`, rồi ghi đường dẫn vào trường `photo`, ví dụ `photo: "assets/img/thu.jpg"`.
Upload CV vào `assets/cv/`, rồi ghi vào `cv: "assets/cv/CV.pdf"` — nút **Download CV** sẽ tự hiện.

## Lưu ý
- Hỏi ý kiến các thành viên trước khi đăng tên/ảnh/LinkedIn của họ công khai.
- Không đăng thông tin nội bộ công ty; báo cáo hiện dùng dữ liệu công khai và đã có disclaimer học thuật.
