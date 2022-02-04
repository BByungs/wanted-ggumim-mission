# 🎉 Link of Deploy
<a href="https://bbyungs-ggumim.netlify.app/" target="_blank">https://bbyungs-ggumim.netlify.app/</a>

# 🎉 Directory Structure
```
.
├── App.tsx
├── assets
│   └── .gitkeep	
├── common
│   ├── Wrapper.tsx
│   ├── Img.tsx
│   └── index.ts
├── components		
│   ├── InfoInPhoto.tsx
│   ├── ImageList.tsx
│   ├── Tooltip.tsx
│   ├── ImgWrapper.tsx
│   ├── InfoInPhotoWrapper.tsx
│   └── index.ts
├── styles
│   ├── GlobalStyle.ts
│   ├── ImageListStyle.ts
│   ├── InfoInPhotoStyle.ts
│   └── TooltipStyle.ts
├── types
│   └── types.ts
│
└── utils
    └── utilFuncs.ts

```

# 🎉 Implementation List

- 배경화면에 돋보기 아이콘 배치
- 아이콘 위치에 따라 툴팁 모양 , 위치 다르게 세팅
- 툴팁 on/off 
- 툴팁에 내용표시(할인된 상품은 할인율 따로 표시)
- Background 밑에 ImageList 구현
- ImageList의 상품 사진에 할인중인 상품은 할인율 표시
- 상품 이미지 클릭시 툴팁 on/off 되게 구현 (focus도 같이 연동됨)
- 툴팁에서 on/off시 focus연동
- 아이콘 , 툴팁을 제외한 나머지 배경화면 클릭시 툴팁 닫히는 기능 구현
