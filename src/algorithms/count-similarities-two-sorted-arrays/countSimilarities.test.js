const { describe } = require("riteway");
const countSimilarities = require("./countSimilarities");

describe("count similarities between two sorted arrays", async assert => {
  {
    // empty lists
    const lhsList = [];
    const rhsList = [];

    assert({
      given: "countSimilarities([], [])",
      should: "return 0",
      actual: countSimilarities(lhsList, rhsList),
      expected: 0
    });
  }

  {
    // no similarities, same length
    const lhsList = [1, 2, 3, 4, 5];
    const rhsList = [6, 7, 8, 9, 10];

    assert({
      given: "countSimilarities([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])",
      should: "return 0",
      actual: countSimilarities(lhsList, rhsList),
      expected: 0
    });
  }

  {
    // no similarities, different lengths
    const lhsList = [1, 2, 3, 4, 5];
    const rhsList = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    assert({
      given:
        "countSimilarities([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15])",
      should: "return 0",
      actual: countSimilarities(lhsList, rhsList),
      expected: 0
    });
  }

  {
    // 3 similarities, same length
    const lhsList = [13, 27, 35, 40, 49, 55, 59];
    const rhsList = [17, 35, 39, 40, 55, 58, 60];

    assert({
      given:
        "countSimilarities([13, 27, 35, 40, 49, 55, 59], [17, 35, 39, 40, 55, 58, 60])",
      should: "return 3",
      actual: countSimilarities(lhsList, rhsList),
      expected: 3
    });
  }

  {
    // 3 similarities, different lengths
    const lhsList = [13, 27, 35, 40, 49, 55, 59];
    const rhsList = [17, 35, 39, 40, 55, 58, 60, 72, 74];

    assert({
      given:
        "countSimilarities([13, 27, 35, 40, 49, 55, 59], [17, 35, 39, 40, 55, 58, 60, 72, 74])",
      should: "return 3",
      actual: countSimilarities(lhsList, rhsList),
      expected: 3
    });
  }

  {
    // 3 similarities, different lengths
    const lhsList = [13, 27, 35, 40, 49, 55, 59, 61, 67];
    const rhsList = [17, 35, 39, 40, 55, 58, 60];

    assert({
      given:
        "countSimilarities([13, 27, 35, 40, 49, 55, 59, 61, 67], [17, 35, 39, 40, 55, 58, 60])",
      should: "return 3",
      actual: countSimilarities(lhsList, rhsList),
      expected: 3
    });
  }

  {
    // same array
    const same = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    assert({
      given:
        "countSimilarities([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])",
      should: "return 10",
      actual: countSimilarities(same, same),
      expected: 10
    });
  }
});
