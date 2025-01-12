# Hacker News Viewer + React Query

이 프로젝트는 Hacker News의 스토리를 페이지 별로 불러올 수 있는 간단한 애플리케이션입니다. **React**, **React Query**, 그리고 **Zod**를 활용하여 API를 처리하며, 프로젝트 구조에는 **Feature-Sliced Design (FSD)** 방식을 적용했습니다.

## 주요 기능

### 핵심 기능

- **스토리 페이지네이션**: React Query의 `useQuery`를 사용해 Hacker News 스토리를 페이지별로 불러옵니다.
- **데이터 프리패칭**: 페이지 버튼에 마우스를 올리면 `prefetchQuery`를 통해 해당 페이지 데이터를 미리 로드하여 사용자 경험을 개선했습니다.
- **플레이스홀더 데이터**: 페이지 전환 시 로딩 스크린 대신 이전 페이지 데이터를 `placeholderData`로 활용하여 레이아웃 이동을 최소화했습니다.

### 커스텀 훅

- **`useHackerNewsStories`**: 스토리를 불러오는 로직을 쉽게 재사용할 수 있도록 만든 커스텀 훅.
- **`usePrefetchNewsStories`**: 마우스오버 이벤트로 스토리를 미리 로드할 수 있도록 만든 커스텀 훅.

### 쿼리 최적화

- **쿼리 옵션 재사용성**: 데이터 fetch와 prefetch에서 공통적으로 사용하는 쿼리 옵션을 `queryOptions` 메서드로 추출하여 코드 중복을 줄였습니다.
- **Stale 데이터 관리**:
  - 불필요한 refetch를 방지하기 위해 다음 설정을 적용:
    - `refetchOnMount: false`
    - `refetchOnWindowFocus: false`
    - `refetchOnReconnect: false`
  - `staleTime`을 `Infinity`로 설정해 빈번한 API 호출을 방지했습니다.

### Zod로 API 검증

- **Hacker News API**의 응답값이 명확하지 않아, 직접 API를 호출하고 응답값을 분석해 예상 구조를 정의했습니다.
- **Zod**를 사용해 예상한 구조와 실제 응답값을 검증하여, 예상과 다른 응답이 있을 경우 명확한 런타임 에러를 발생시켰습니다.
- Zod의 런타임 타입 체킹 덕분에 응답값이 예상과 다른 경우를 빠르게 잡아내는 장점을 체감할 수 있었습니다.

### 프로젝트 구조

- **Feature-Sliced Design (FSD)** 방식으로 프로젝트를 구성했습니다. [FSD 자세히 알아보기](https://feature-sliced.design/docs).

---

## 기술 스택

- **React**
- **React Query**
- **Zod**
- **CSS Module**

---

## 실행 방법

1. 레포지토리 클론:

   ```bash
   git clone https://github.com/hyundonmoon/react-query-practice
   cd react-query-practice
   ```

2. 의존성 설치:

   ```bash
   yarn
   ```

3. 개발 서버 실행:
   ```bash
   yarn dev
   ```

4\. 브라우저에서 다음 주소로 이동:

```
http://localhost:5173
```

---

## 참고 자료

- [Hacker News API](https://hn.algolia.com/api): 오픈 API.
- [Feature-Sliced Design](https://feature-sliced.design): 프로젝트 아키텍처 가이드.
