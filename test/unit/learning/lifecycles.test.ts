// uploadFileToCloud("filePath", file[, metadata]);

function updaloadUserFile(params: {path: string; file: ArrayBuffer[]}) {
  // uploadFileToCloud
}

class Instance {
  hello() {}
}

// LifeCycle
describe('', () => {
  let instance: Instance | undefined;

  // Before All Tests
  beforeAll(() => {
    console.log('BEFORE ALL ====');
    instance = new Instance();
  });

  // Before Each Test
  beforeEach(() => {
    console.log('BEFORE EACH ====');
    instance = new Instance();
  });

  // After Each Test
  afterEach(() => {
    console.log('AFTER EACH ====');
    instance = new Instance();
  });

  // After All Tests
  afterAll(() => {
    console.log('AFTER ALL ====');
    // clean up
    instance = undefined;
  });

  describe('NESTED LEVEL', () => {
    // Before All Tests
    beforeAll(() => {
      console.log('BEFORE ALL LEVEL 2 ====');
    });

    // Before Each Test
    beforeEach(() => {
      console.log('BEFORE EACH LEVEL 2 ====');
    });

    // After Each Test
    afterEach(() => {
      console.log('AFTER EACH LEVEL 2 ====');
    });

    // After All Tests
    afterAll(() => {
      console.log('AFTER ALL LEVEL 2 ====');
    });

    describe('NESTED LEVEL 3', () => {
      // Before All Tests
      beforeAll(() => {
        console.log('BEFORE ALL LEVEL 3 ====');
      });

      // Before Each Test
      beforeEach(() => {
        console.log('BEFORE EACH LEVEL 3 ====');
      });

      // After Each Test
      afterEach(() => {
        console.log('AFTER EACH LEVEL 3 ====');
      });

      // After All Tests
      afterAll(() => {
        console.log('AFTER ALL LEVEL 3 ====');
      });

      it('runs 3.1', () => {
        console.log('TEST 3.1');
        instance?.hello();
      });

      it('runs 3.2', () => {
        console.log('TEST 3.2');
        instance?.hello();
      });
    });

    it('runs 2.1', () => {
      console.log('TEST 2.1');
      instance?.hello();
    });

    it('runs 1.2', () => {
      console.log('TEST 2.2');
      instance?.hello();
    });
  });

  it('runs 1', () => {
    console.log('TEST 1.1');
    instance?.hello();
  });

  it('runs 2', () => {
    console.log('TEST 1.2');
    instance?.hello();
  });
});
