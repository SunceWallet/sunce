import { r as reactExports, cf as _objectWithoutPropertiesLoose$1, f as _extends$1, R as React, S as requireInteropRequireDefault, U as requireReact, V as requireCreateSvgIcon, g as getDefaultExportFromCjs, ab as makeStyles, au as balancelineToAsset, ah as breakpoints, X as useLiveAccountData, a5 as libExports, at as stringifyAsset, o as IconButton } from "./app-DBEXmgIl.js";
import { d as AssetLogo, S as SingleBalance, I as InlineLoader, s as sortBalances } from "./app-stage2-CwdMAbKU.js";
const is = {
  arr: Array.isArray,
  obj: (a) => Object.prototype.toString.call(a) === "[object Object]",
  fun: (a) => typeof a === "function",
  str: (a) => typeof a === "string",
  num: (a) => typeof a === "number",
  und: (a) => a === void 0,
  nul: (a) => a === null,
  set: (a) => a instanceof Set,
  map: (a) => a instanceof Map,
  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;
    for (i in a) if (!(i in b)) return false;
    for (i in b) if (a[i] !== b[i]) return false;
    return is.und(i) ? a === b : true;
  }
};
function merge(target, lowercase) {
  return (object) => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = element;
    acc[key] = target(key);
    return acc;
  }, target);
}
function useForceUpdate() {
  const _useState = reactExports.useState(false), f = _useState[1];
  const forceUpdate = reactExports.useCallback(() => f((v) => !v), []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return is.fun(obj) ? obj(...args) : obj;
}
function getForwardProps(props) {
  props.to;
  props.from;
  props.config;
  props.onStart;
  props.onRest;
  props.onFrame;
  props.children;
  props.reset;
  props.reverse;
  props.force;
  props.immediate;
  props.delay;
  props.attach;
  props.destroyed;
  props.interpolateTo;
  props.ref;
  props.lazy;
  const forward = _objectWithoutPropertiesLoose$1(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
  return forward;
}
function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return _extends$1({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : _extends$1({}, a, {
    [k]: props[k]
  }), {});
  return _extends$1({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    if (is.fun(forward)) forward(ref);
    else if (is.obj(forward)) {
      forward.current = ref;
    }
  }
  return ref;
}
class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }
  getAnimatedValue() {
    return this.getValue();
  }
  getPayload() {
    return this.payload || this;
  }
  attach() {
  }
  detach() {
  }
  getChildren() {
    return this.children;
  }
  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }
  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }
}
class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];
    this.attach = () => this.payload.forEach((p) => p instanceof Animated && p.addChild(this));
    this.detach = () => this.payload.forEach((p) => p instanceof Animated && p.removeChild(this));
  }
}
class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};
    this.attach = () => Object.values(this.payload).forEach((s) => s instanceof Animated && s.addChild(this));
    this.detach = () => Object.values(this.payload).forEach((s) => s instanceof Animated && s.removeChild(this));
  }
  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }
    const payload = {};
    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? "getAnimatedValue" : "getValue"]() : value;
    }
    return payload;
  }
  getAnimatedValue() {
    return this.getValue(true);
  }
}
let applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}
let colorNames;
function injectColorNames(names) {
  colorNames = names;
}
let requestFrame = (cb) => typeof window !== "undefined" ? window.requestAnimationFrame(cb) : -1;
let interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
let now = () => Date.now();
let animatedApi = (node) => node.current;
let createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}
class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : _extends$1({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }
}
const isFunctionComponent = (val) => is.fun(val) && !(val.prototype instanceof React.Component);
const createAnimatedComponent = (Component) => {
  const AnimatedComponent = reactExports.forwardRef((props, ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = reactExports.useRef(true);
    const propsAnimated = reactExports.useRef(null);
    const node = reactExports.useRef(null);
    const attachProps = reactExports.useCallback((props2) => {
      const oldPropsAnimated = propsAnimated.current;
      const callback = () => {
        let didUpdate = false;
        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }
        if (!node.current || didUpdate === false) {
          forceUpdate();
        }
      };
      propsAnimated.current = new AnimatedProps(props2, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    reactExports.useEffect(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    reactExports.useImperativeHandle(ref, () => animatedApi(node));
    attachProps(props);
    const _getValue = propsAnimated.current.getValue();
    _getValue.scrollTop;
    _getValue.scrollLeft;
    const animatedProps = _objectWithoutPropertiesLoose$1(_getValue, ["scrollTop", "scrollLeft"]);
    const refFn = isFunctionComponent(Component) ? void 0 : (childRef) => node.current = handleRef(childRef, ref);
    return React.createElement(Component, _extends$1({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};
let active = false;
const controllers = /* @__PURE__ */ new Set();
const update = () => {
  if (!active) return false;
  let time = now();
  for (let controller of controllers) {
    let isActive = false;
    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;
      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx];
        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue();
        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        }
        if (typeof from === "string" || typeof to === "string") {
          animation.setValue(to);
          animation.done = true;
          continue;
        }
        if (config.duration !== void 0) {
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-0.0020000000000000018 * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity;
          if (time > lastTime + 64) lastTime = time;
          let numSteps = Math.floor(time - lastTime);
          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1e3;
            position = position + velocity * 1 / 1e3;
          }
          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        }
        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;
        if (endOfAnimation) {
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;
        animation.setValue(position);
        animation.lastPosition = position;
      }
      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    }
    if (controller.props.onFrame) controller.props.onFrame(controller.values);
    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  }
  if (controllers.size) {
    requestFrame(update);
  } else {
    active = false;
  }
  return active;
};
const start = (controller) => {
  if (!controllers.has(controller)) controllers.add(controller);
  if (!active) {
    active = true;
    requestFrame(update);
  }
};
const stop = (controller) => {
  if (controllers.has(controller)) controllers.delete(controller);
};
function createInterpolator(range, output, extrapolate) {
  if (typeof range === "function") {
    return range;
  }
  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output,
      extrapolate
    });
  }
  if (interpolation && typeof range.output[0] === "string") {
    return interpolation(range);
  }
  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || "extend";
  const extrapolateRight = config.extrapolateRight || config.extrapolate || "extend";
  const easing = config.easing || ((t) => t);
  return (input) => {
    const range2 = findRange(input, inputRange);
    return interpolate(input, inputRange[range2], inputRange[range2 + 1], outputRange[range2], outputRange[range2 + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity") return result;
    else if (extrapolateLeft === "clamp") result = inputMin;
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity") return result;
    else if (extrapolateRight === "clamp") result = inputMax;
  }
  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity) result = -result;
  else if (inputMax === Infinity) result = result - inputMin;
  else result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity) result = -result;
  else if (outputMax === Infinity) result = result + outputMin;
  else result = result * (outputMax - outputMin) + outputMin;
  return result;
}
function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;
  return i - 1;
}
class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output, extrapolate) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output, extrapolate);
  }
  getValue() {
    return this.calc(...this.payload.map((value) => value.getValue()));
  }
  updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  }
  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }
}
function addAnimatedStyles(node, styles) {
  if ("update" in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach((child) => addAnimatedStyles(child, styles));
  }
}
class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;
    super();
    _this = this;
    this.animatedStyles = /* @__PURE__ */ new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;
    this.setValue = function(value, flush) {
      if (flush === void 0) {
        flush = true;
      }
      _this.value = value;
      if (flush) _this.flush();
    };
    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }
  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }
    this.animatedStyles.forEach((animatedStyle) => animatedStyle.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }
}
class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map((n) => new AnimatedValue(n));
  }
  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }
    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach((p) => p.setValue(value, flush));
    }
  }
  getValue() {
    return this.payload.map((v) => v.getValue());
  }
  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }
}
let G = 0;
class Controller {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;
    this.getValues = () => this.interpolations;
    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(args) {
    if (!args) return this;
    const _ref = interpolateTo(args), _ref$delay = _ref.delay, delay = _ref$delay === void 0 ? 0 : _ref$delay, to = _ref.to, props = _objectWithoutPropertiesLoose$1(_ref, ["delay", "to"]);
    if (is.arr(to) || is.fun(to)) {
      this.queue.push(_extends$1({}, props, {
        delay,
        to
      }));
    } else if (to) {
      let ops = {};
      Object.entries(to).forEach((_ref2) => {
        let k = _ref2[0], v = _ref2[1];
        const entry = _extends$1({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props);
        const previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = _extends$1({}, ops[entry.delay], entry, {
          to: _extends$1({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    }
    this.queue = this.queue.sort((a, b) => a.delay - b.delay);
    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  start(onEnd) {
    if (this.queue.length) {
      this.idle = false;
      if (this.localQueue) {
        this.localQueue.forEach((_ref3) => {
          let _ref3$from = _ref3.from, from = _ref3$from === void 0 ? {} : _ref3$from, _ref3$to = _ref3.to, to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = _extends$1({}, from, this.merged);
          if (is.obj(to)) this.merged = _extends$1({}, this.merged, to);
        });
      }
      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = [];
      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay, props = _objectWithoutPropertiesLoose$1(_ref4, ["delay"]);
        const cb = (finished) => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }
          if (onEnd) onEnd();
        };
        let async = is.arr(props.to) || is.fun(props.to);
        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);
              else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);
        else this.diff(props).start(cb);
      });
    } else {
      if (is.fun(onEnd)) this.listeners.push(onEnd);
      if (this.props.onStart) this.props.onStart();
      start(this);
    }
    return this;
  }
  stop(finished) {
    this.listeners.forEach((onEnd) => onEnd(finished));
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  }
  runAsync(_ref5, onEnd) {
    var _this = this;
    _ref5.delay;
    let props = _objectWithoutPropertiesLoose$1(_ref5, ["delay"]);
    const local = this.local;
    let queue = Promise.resolve(void 0);
    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;
        const fresh = _extends$1({}, props, interpolateTo(props.to[index]));
        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          if (local === this.guid) return new Promise((r) => this.diff(fresh).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to(
        // next(props)
        (p) => {
          const fresh = _extends$1({}, props, interpolateTo(p));
          if (is.arr(fresh.config)) fresh.config = fresh.config[index];
          index++;
          if (local === this.guid) return last = new Promise((r) => this.diff(fresh).start(r));
          return;
        },
        // cancel()
        function(finished) {
          if (finished === void 0) {
            finished = true;
          }
          return _this.stop(finished);
        }
      ).then(() => last));
    }
    queue.then(onEnd);
  }
  diff(props) {
    this.props = _extends$1({}, this.props, props);
    let _this$props = this.props, _this$props$from = _this$props.from, from = _this$props$from === void 0 ? {} : _this$props$from, _this$props$to = _this$props.to, to = _this$props$to === void 0 ? {} : _this$props$to, _this$props$config = _this$props.config, config = _this$props$config === void 0 ? {} : _this$props$config, reverse = _this$props.reverse, attach = _this$props.attach, reset = _this$props.reset, immediate = _this$props.immediate;
    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    }
    this.merged = _extends$1({}, from, this.merged, to);
    this.hasChanged = false;
    let target = attach && attach(this);
    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0], value = _ref7[1];
      let entry = acc[name] || {};
      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith("#") && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent, interpolation$$1 = entry.interpolation, toValues = toArray(target ? toValue.getPayload() : toValue), animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue();
      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some((v) => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config);
      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);
        else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);
        else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;
          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);
          const range = {
            output: [prev, value]
          };
          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true;
        animatedValues.forEach((value2) => {
          value2.startPosition = value2.value;
          value2.lastPosition = value2.value;
          value2.lastVelocity = isActive ? value2.lastVelocity : void 0;
          value2.lastTime = isActive ? value2.lastTime : void 0;
          value2.startTime = now();
          value2.done = false;
          value2.animatedStyles.clear();
        });
        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }
        return _extends$1({}, acc, {
          [name]: _extends$1({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, (t) => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }
          parent.done = true;
          this.hasChanged = true;
          return _extends$1({}, acc, {
            [name]: _extends$1({}, acc[name], {
              previous: newValue
            })
          });
        }
        return acc;
      }
    }, this.animations);
    if (this.hasChanged) {
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};
      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }
    return this;
  }
  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }
}
const useSprings = (length, props) => {
  const mounted = reactExports.useRef(false);
  const ctrl = reactExports.useRef();
  const isFn = is.fun(props);
  const _useMemo = reactExports.useMemo(() => {
    if (ctrl.current) {
      ctrl.current.map((c) => c.destroy());
      ctrl.current = void 0;
    }
    let ref2;
    return [new Array(length).fill().map((_, i) => {
      const ctrl2 = new Controller();
      const newProps = isFn ? callProp(props, i, ctrl2) : props[i];
      if (i === 0) ref2 = newProps.ref;
      ctrl2.update(newProps);
      if (!ref2) ctrl2.start();
      return ctrl2;
    }), ref2];
  }, [length]), controllers2 = _useMemo[0], ref = _useMemo[1];
  ctrl.current = controllers2;
  reactExports.useImperativeHandle(ref, () => ({
    start: () => Promise.all(ctrl.current.map((c) => new Promise((r) => c.start(r)))),
    stop: (finished) => ctrl.current.forEach((c) => c.stop(finished)),
    get controllers() {
      return ctrl.current;
    }
  }));
  const updateCtrl = reactExports.useMemo(() => (updateProps) => ctrl.current.map((c, i) => {
    c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
    if (!ref) c.start();
  }), [length]);
  reactExports.useEffect(() => {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach((c) => c.start());
  });
  reactExports.useEffect(() => (mounted.current = true, () => ctrl.current.forEach((c) => c.destroy())), []);
  const propValues = ctrl.current.map((c) => c.getValues());
  return isFn ? [propValues, updateCtrl, (finished) => ctrl.current.forEach((c) => c.pause(finished))] : propValues;
};
const useSpring = (props) => {
  const isFn = is.fun(props);
  const _useSprings = useSprings(1, isFn ? props : [props]), result = _useSprings[0], set = _useSprings[1], pause = _useSprings[2];
  return isFn ? [result[0], set, pause] : result;
};
class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }
    super();
    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }
    this.payload = style;
  }
}
const colors = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
const NUMBER = "[-+]?\\d*\\.?\\d+";
const PERCENTAGE = NUMBER + "%";
function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }
  return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;
function normalizeColor(color) {
  let match;
  if (typeof color === "number") {
    return color >>> 0 === color && color >= 0 && color <= 4294967295 ? color : null;
  }
  if (match = hex6.exec(color)) return parseInt(match[1] + "ff", 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];
  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    255) >>> // a
    0;
  }
  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }
  if (match = hex3.exec(color)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      "ff",
      // a
      16
    ) >>> 0;
  }
  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;
  if (match = hex4.exec(color)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      match[4] + match[4],
      // a
      16
    ) >>> 0;
  }
  if (match = hsl.exec(color)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | 255) >>> // a
    0;
  }
  if (match = hsla.exec(color)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | parse1(match[4])) >>> // a
    0;
  }
  return null;
}
function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}
function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}
function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}
function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 4278190080) >>> 24;
  let g = (int32Color & 16711680) >>> 16;
  let b = (int32Color & 65280) >>> 8;
  let a = (int32Color & 255) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
const colorNamesRegex = new RegExp(`(${Object.keys(colors).join("|")})`, "g");
const createStringInterpolator = (config) => {
  const outputRange = config.output.map((rangeValue) => rangeValue.replace(colorRegex, colorToRgba)).map((rangeValue) => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach((value) => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator(_extends$1({}, config, {
    output: outputRanges[i]
  })));
  return (input) => {
    let i = 0;
    return outputRange[0].replace(stringShapeRegex, () => interpolations[i++](input)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};
let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);
const prefixes = ["Webkit", "Ms", "Moz", "O"];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach((prefix) => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);
function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === "boolean" || value === "") return "";
  if (!isCustomProperty && typeof value === "number" && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + "px";
  return ("" + value).trim();
}
const attributeCache = {};
injectCreateAnimatedStyle((style) => new AnimatedStyle(style));
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== void 0) {
    const style = props.style, children = props.children, scrollTop = props.scrollTop, scrollLeft = props.scrollLeft, attributes = _objectWithoutPropertiesLoose$1(props, ["style", "children", "scrollTop", "scrollLeft"]);
    const filter = instance.nodeName === "filter" || instance.parentNode && instance.parentNode.nodeName === "filter";
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft;
    if (children !== void 0) instance.textContent = children;
    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf("--") === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === "float") styleName = "cssFloat";
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);
      else instance.style[styleName] = styleValue;
    }
    for (let name in attributes) {
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, (n) => "-" + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== "undefined") instance.setAttribute(dashCase, attributes[name]);
    }
    return;
  } else return false;
}, (style) => style);
const domElements = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
const apply = merge(createAnimatedComponent);
const extendedAnimated = apply(domElements);
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var GestureFlag;
(function(GestureFlag2) {
  GestureFlag2["OnStart"] = "start";
  GestureFlag2["OnChange"] = "change";
  GestureFlag2["OnEnd"] = "end";
})(GestureFlag || (GestureFlag = {}));
var noop = function noop2() {
};
var chainFns = function chainFns2() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return fns.forEach(function(fn) {
      return fn.apply(void 0, args);
    });
  };
};
var addV = function addV2(v1, v2) {
  return v1.map(function(v, i) {
    return v + v2[i];
  });
};
var subV = function subV2(v1, v2) {
  return v1.map(function(v, i) {
    return v - v2[i];
  });
};
var setListeners = function setListeners2(add) {
  return function(el, listeners, options) {
    var action = add ? "addEventListener" : "removeEventListener";
    listeners.forEach(function(_ref) {
      var type = _ref[0], fn = _ref[1];
      return el[action](type, fn, options);
    });
  };
};
var addListeners = /* @__PURE__ */ setListeners(true);
var removeListeners = /* @__PURE__ */ setListeners(false);
function getModifierKeys(event) {
  var shiftKey = event.shiftKey, altKey = event.altKey, metaKey = event.metaKey, ctrlKey = event.ctrlKey;
  return {
    shiftKey,
    altKey,
    metaKey,
    ctrlKey
  };
}
function getScrollEventData(event) {
  var _event$currentTarget = event.currentTarget, scrollX = _event$currentTarget.scrollX, scrollY = _event$currentTarget.scrollY, scrollLeft = _event$currentTarget.scrollLeft, scrollTop = _event$currentTarget.scrollTop;
  return _extends({
    values: [scrollX || scrollLeft || 0, scrollY || scrollTop || 0]
  }, getModifierKeys(event));
}
function getWheelEventData(event) {
  var deltaX = event.deltaX, deltaY = event.deltaY;
  return _extends({
    values: [deltaX, deltaY]
  }, getModifierKeys(event));
}
function getPointerEventData(event) {
  var touches = event.touches, buttons = event.buttons, changedTouches = event.changedTouches;
  var touchEvents = touches && touches.length > 0 ? touches : changedTouches && changedTouches.length > 0 ? changedTouches : null;
  var _ref2 = touchEvents ? touchEvents[0] : event, clientX = _ref2.clientX, clientY = _ref2.clientY;
  var down = touchEvents && touchEvents.length > 0 || buttons > 0;
  return _extends({
    values: [clientX, clientY],
    touches: touchEvents && touchEvents.length || 0,
    down,
    buttons
  }, getModifierKeys(event));
}
function getTwoTouchesEventData(event) {
  var touches = event.touches;
  var dx = touches[1].clientX - touches[0].clientX;
  var dy = touches[1].clientY - touches[0].clientY;
  var da = [Math.hypot(dx, dy), -(Math.atan2(dx, dy) * 180) / Math.PI];
  var origin = [(touches[1].clientX + touches[0].clientX) / 2, (touches[1].clientY + touches[0].clientY) / 2];
  return _extends({
    values: da,
    origin,
    touches: 2,
    down: touches.length > 0
  }, getModifierKeys(event));
}
function calculateVelocity(diff, delta_t, len) {
  len = len || Math.hypot.apply(Math, diff);
  return delta_t ? len / delta_t : 0;
}
function calculateVelocities(diff, delta_t) {
  return delta_t ? diff.map(function(v) {
    return v / delta_t;
  }) : Array(diff.length).fill(0);
}
function calculateDistance(delta) {
  return Math.hypot.apply(Math, delta);
}
function calculateDirection(diff, len) {
  len = len || Math.hypot.apply(Math, diff) || 1;
  return diff.map(function(v) {
    return v / len;
  });
}
function calculateAllKinematics(delta, diff, delta_t) {
  var len = Math.hypot.apply(Math, diff);
  return {
    velocities: calculateVelocities(diff, delta_t),
    velocity: calculateVelocity(diff, delta_t, len),
    distance: calculateDistance(delta),
    direction: calculateDirection(diff, len)
  };
}
function supportsGestureEvent() {
  try {
    return "constructor" in GestureEvent;
  } catch (e) {
    return false;
  }
}
var mappedKeys = {
  drag: {
    stateKey: "drag",
    handlerKey: "onDrag"
  },
  pinch: {
    stateKey: "pinch",
    handlerKey: "onPinch"
  },
  move: {
    stateKey: "move",
    handlerKey: "onMove"
  },
  scroll: {
    stateKey: "scroll",
    handlerKey: "onScroll"
  },
  wheel: {
    stateKey: "wheel",
    handlerKey: "onWheel"
  },
  hover: {
    stateKey: "move",
    handlerKey: "onHover"
  }
};
var defaultConfig = {
  domTarget: void 0,
  event: {
    passive: true,
    capture: false
  },
  pointerEvents: false,
  window: typeof window !== "undefined" ? window : void 0,
  transform: {
    x: function x(_x) {
      return _x;
    },
    y: function y(_y) {
      return _y;
    }
  },
  enabled: true,
  drag: true,
  pinch: true,
  scroll: true,
  wheel: true,
  hover: true,
  move: true
};
var initialCommon = {
  event: void 0,
  currentTarget: void 0,
  pointerId: void 0,
  values: [0, 0],
  velocities: [0, 0],
  delta: [0, 0],
  initial: [0, 0],
  previous: [0, 0],
  transform: void 0,
  local: [0, 0],
  lastLocal: [0, 0],
  first: false,
  last: false,
  active: false,
  time: void 0,
  cancel: noop,
  canceled: false,
  memo: void 0,
  args: void 0
};
var initialCoordinates = {
  xy: [0, 0],
  vxvy: [0, 0],
  velocity: 0,
  distance: 0,
  direction: [0, 0]
};
var initialDistanceAngle = {
  da: [0, 0],
  vdva: [0, 0],
  origin: [0, 0],
  turns: 0
};
var initialState = {
  shared: {
    hovering: false,
    scrolling: false,
    wheeling: false,
    dragging: false,
    moving: false,
    pinching: false,
    touches: 0,
    buttons: 0,
    down: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    ctrlKey: false
  },
  move: _extends({}, initialCommon, {}, initialCoordinates),
  drag: _extends({}, initialCommon, {}, initialCoordinates),
  scroll: _extends({}, initialCommon, {}, initialCoordinates),
  wheel: _extends({}, initialCommon, {}, initialCoordinates),
  pinch: _extends({}, initialCommon, {}, initialDistanceAngle)
};
var genericEndState = {
  first: false,
  last: true,
  active: false
};
var Recognizer = (
  /**
   * Creates an instance of a gesture recognizer.
   * @param gestureKey drag, move, hover, pinch, etc.
   * @param controller the controller attached to the gesture
   * @param [args] the args that should be passed to the gesture handler
   */
  function Recognizer2(gestureKey, controller, args) {
    var _this = this;
    if (args === void 0) {
      args = [];
    }
    this.gestureKey = gestureKey;
    this.controller = controller;
    this.args = args;
    this.isEnabled = function() {
      return _this.controller.config.enabled && _this.controller.config[_this.gestureKey];
    };
    this.setTimeout = function(callback, ms) {
      var _window;
      if (ms === void 0) {
        ms = 140;
      }
      for (var _len = arguments.length, args2 = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args2[_key - 2] = arguments[_key];
      }
      _this.controller.timeouts[_this.stateKey] = (_window = window).setTimeout.apply(_window, [callback, ms].concat(args2));
    };
    this.clearTimeout = function() {
      clearTimeout(_this.controller.timeouts[_this.stateKey]);
    };
    this.getState = function() {
      return _this.controller.state[_this.stateKey];
    };
    this.getSharedState = function() {
      return _this.controller.state.shared;
    };
    this.pointerEventsEnabled = function() {
      return _this.controller.config.pointerEvents;
    };
    this.getTransformConfig = function() {
      return _this.controller.config.transform;
    };
    this.addWindowListeners = function(listeners) {
      _this.controller.addWindowListeners(_this.stateKey, listeners);
    };
    this.removeWindowListeners = function() {
      _this.controller.removeWindowListeners(_this.stateKey);
    };
    this.updateState = function(sharedState, gestureState, gestureFlag) {
      _this.controller.updateState(sharedState, gestureState, _this.gestureKey, gestureFlag);
    };
    this.getStartState = function(values, event) {
      var state = _this.getState();
      var initial = initialState[_this.stateKey];
      var transform = state.transform || event.transform || _this.getTransformConfig();
      var lastLocal = state.local || initial.local;
      return _extends({}, initial, {
        event,
        values,
        initial: values,
        previous: values,
        local: lastLocal,
        lastLocal,
        first: true,
        active: true,
        transform,
        time: event.timeStamp,
        args: _this.args
      });
    };
    this.stateKey = mappedKeys[gestureKey].stateKey;
  }
);
var CoordinatesRecognizer = /* @__PURE__ */ function(_Recognizer) {
  _inheritsLoose(CoordinatesRecognizer2, _Recognizer);
  function CoordinatesRecognizer2() {
    var _this;
    _this = _Recognizer.apply(this, arguments) || this;
    _this.getKinematics = function(values, event) {
      var state = _this.getState();
      var xy = state.values, initial = state.initial, lastLocal = state.lastLocal, _state$time = state.time, time = _state$time === void 0 ? 0 : _state$time;
      var transform = state.transform || event.transform || _this.getTransformConfig();
      var delta = subV(values, initial).map(function(v, i) {
        return Object.values(transform)[i](v);
      });
      var diff = subV(values, xy).map(function(v, i) {
        return Object.values(transform)[i](v);
      });
      var delta_t = event.timeStamp - time;
      var _calculateAllKinemati = calculateAllKinematics(delta, diff, delta_t), velocity = _calculateAllKinemati.velocity, velocities = _calculateAllKinemati.velocities, distance = _calculateAllKinemati.distance, direction = _calculateAllKinemati.direction;
      return {
        event,
        values,
        delta,
        velocity,
        velocities,
        distance,
        direction,
        local: addV(lastLocal, delta),
        previous: xy,
        transform,
        time: event.timeStamp
      };
    };
    return _this;
  }
  return CoordinatesRecognizer2;
}(Recognizer);
var DragRecognizer = /* @__PURE__ */ function(_CoordinatesRecognize) {
  _inheritsLoose(DragRecognizer2, _CoordinatesRecognize);
  function DragRecognizer2(controller, args) {
    var _this;
    _this = _CoordinatesRecognize.call(this, "drag", controller, args) || this;
    _this.onStart = function(event) {
      if (!_this.isEnabled()) return;
      var _getPointerEventData = getPointerEventData(event), values = _getPointerEventData.values, rest = _objectWithoutPropertiesLoose(_getPointerEventData, ["values"]);
      if (rest.touches > 1) return;
      var currentTarget = event.currentTarget, pointerId = event.pointerId;
      if (_this.pointerEventsEnabled()) {
        currentTarget && currentTarget.setPointerCapture(pointerId);
      } else {
        _this.removeWindowListeners();
        var dragListeners = [["mousemove", _this.onChange], ["mouseup", _this.onEnd], ["touchmove", _this.onChange], ["touchend", _this.onEnd], ["touchcancel", _this.onEnd]];
        _this.addWindowListeners(dragListeners);
      }
      var startState = _this.getStartState(values, event);
      _this.updateState(_extends({}, rest, {
        dragging: true,
        down: true
      }), _extends({}, startState, {
        currentTarget,
        pointerId,
        cancel: function cancel() {
          return _this.onCancel(event);
        }
      }), GestureFlag.OnStart);
    };
    _this.onChange = function(event) {
      var _this$getState = _this.getState(), canceled = _this$getState.canceled, active2 = _this$getState.active;
      if (canceled || !active2) return;
      var _getPointerEventData2 = getPointerEventData(event), values = _getPointerEventData2.values, rest = _objectWithoutPropertiesLoose(_getPointerEventData2, ["values"]);
      if (rest.buttons === 0 && rest.touches === 0) {
        _this.onEnd(event);
        return;
      }
      var kinematics = _this.getKinematics(values, event);
      var cancel = function cancel2() {
        return _this.onCancel(event);
      };
      _this.updateState(rest, _extends({}, kinematics, {
        first: false,
        cancel
      }), GestureFlag.OnChange);
    };
    _this.onEnd = function(event) {
      var state = _this.getState();
      if (!state.active) return;
      var currentTarget = state.currentTarget, pointerId = state.pointerId;
      if (currentTarget && _this.pointerEventsEnabled()) currentTarget.releasePointerCapture(pointerId);
      else _this.removeWindowListeners();
      _this.updateState({
        dragging: false,
        down: false,
        buttons: 0,
        touches: 0
      }, _extends({}, genericEndState, {
        event
      }), GestureFlag.OnEnd);
    };
    _this.onCancel = function(event) {
      _this.updateState(null, {
        canceled: true,
        cancel: noop
      });
      requestAnimationFrame(function() {
        return _this.onEnd(event);
      });
    };
    return _this;
  }
  var _proto = DragRecognizer2.prototype;
  _proto.getEventBindings = function getEventBindings() {
    if (this.pointerEventsEnabled()) {
      return [["onPointerDown", this.onStart], ["onPointerMove", this.onChange], [["onPointerUp", "onPointerCancel"], this.onEnd]];
    }
    return [[["onMouseDown", "onTouchStart"], this.onStart]];
  };
  return DragRecognizer2;
}(CoordinatesRecognizer);
var ScrollRecognizer = /* @__PURE__ */ function(_CoordinatesRecognize) {
  _inheritsLoose(ScrollRecognizer2, _CoordinatesRecognize);
  function ScrollRecognizer2(controller, args) {
    var _this;
    _this = _CoordinatesRecognize.call(this, "scroll", controller, args) || this;
    _this.onChange = function(event) {
      if (!_this.isEnabled()) return;
      _this.clearTimeout();
      _this.setTimeout(_this.onEnd);
      var _getScrollEventData = getScrollEventData(event), values = _getScrollEventData.values, rest = _objectWithoutPropertiesLoose(_getScrollEventData, ["values"]);
      if (!_this.getState().active) {
        var startState = _this.getStartState(values, event);
        _this.updateState(_extends({
          scrolling: true
        }, rest), startState, GestureFlag.OnStart);
      } else {
        var kinematics = _this.getKinematics(values, event);
        _this.updateState(rest, _extends({}, kinematics, {
          first: false
        }), GestureFlag.OnChange);
      }
    };
    _this.onEnd = function() {
      if (!_this.getState().active) return;
      _this.updateState({
        scrolling: false
      }, _extends({}, genericEndState, {
        velocity: 0,
        velocities: [0, 0]
      }), GestureFlag.OnEnd);
    };
    return _this;
  }
  var _proto = ScrollRecognizer2.prototype;
  _proto.getEventBindings = function getEventBindings() {
    return [["onScroll", this.onChange]];
  };
  return ScrollRecognizer2;
}(CoordinatesRecognizer);
var WheelRecognizer = /* @__PURE__ */ function(_CoordinatesRecognize) {
  _inheritsLoose(WheelRecognizer2, _CoordinatesRecognize);
  function WheelRecognizer2(controller, args) {
    var _this;
    _this = _CoordinatesRecognize.call(this, "wheel", controller, args) || this;
    _this.onChange = function(event) {
      if (!_this.isEnabled()) return;
      _this.clearTimeout();
      _this.setTimeout(_this.onEnd);
      var _getWheelEventData = getWheelEventData(event), eventValues = _getWheelEventData.values, rest = _objectWithoutPropertiesLoose(_getWheelEventData, ["values"]);
      var values = addV(eventValues, _this.getState().values);
      if (!_this.getState().active) {
        var startState = _this.getStartState(values, event);
        _this.updateState(_extends({
          wheeling: true
        }, rest), startState, GestureFlag.OnStart);
      } else {
        var kinematics = _this.getKinematics(values, event);
        _this.updateState(rest, _extends({}, kinematics, {
          first: false
        }), GestureFlag.OnChange);
      }
    };
    _this.onEnd = function() {
      if (!_this.getState().active) return;
      _this.updateState({
        wheeling: false
      }, _extends({}, genericEndState, {
        velocity: 0,
        velocities: [0, 0]
      }), GestureFlag.OnEnd);
    };
    return _this;
  }
  var _proto = WheelRecognizer2.prototype;
  _proto.getEventBindings = function getEventBindings() {
    return [["onWheel", this.onChange]];
  };
  return WheelRecognizer2;
}(CoordinatesRecognizer);
var MoveRecognizer = /* @__PURE__ */ function(_CoordinatesRecognize) {
  _inheritsLoose(MoveRecognizer2, _CoordinatesRecognize);
  function MoveRecognizer2(controller, args) {
    var _this;
    _this = _CoordinatesRecognize.call(this, "move", controller, args) || this;
    _this.onChange = function(event) {
      if (!_this.isEnabled()) return;
      _this.clearTimeout();
      _this.setTimeout(_this.onEnd);
      var _getPointerEventData = getPointerEventData(event), values = _getPointerEventData.values, rest = _objectWithoutPropertiesLoose(_getPointerEventData, ["values"]);
      if (!_this.getState().active) {
        var startState = _this.getStartState(values, event);
        _this.updateState(_extends({
          moving: true
        }, rest), startState, GestureFlag.OnStart);
      } else {
        var kinematics = _this.getKinematics(values, event);
        _this.updateState(rest, _extends({}, kinematics, {
          first: false
        }), GestureFlag.OnChange);
      }
    };
    _this.onEnd = function() {
      if (!_this.getState().active) return;
      _this.updateState({
        moving: false
      }, _extends({}, genericEndState, {
        velocity: 0,
        velocities: [0, 0]
      }), GestureFlag.OnEnd);
    };
    return _this;
  }
  var _proto = MoveRecognizer2.prototype;
  _proto.getEventBindings = function getEventBindings() {
    if (this.pointerEventsEnabled()) {
      return [["onPointerMove", this.onChange]];
    }
    return [["onMouseMove", this.onChange]];
  };
  return MoveRecognizer2;
}(CoordinatesRecognizer);
var HoverRecognizer = /* @__PURE__ */ function(_CoordinatesRecognize) {
  _inheritsLoose(HoverRecognizer2, _CoordinatesRecognize);
  function HoverRecognizer2(controller, args) {
    var _this;
    _this = _CoordinatesRecognize.call(this, "hover", controller, args) || this;
    _this.onStart = function(event) {
      if (!_this.isEnabled()) return;
      var _getPointerEventData = getPointerEventData(event), values = _getPointerEventData.values, rest = _objectWithoutPropertiesLoose(_getPointerEventData, ["values"]);
      _this.updateState(_extends({
        hovering: true
      }, rest), {
        values,
        event,
        args: _this.args
      }, GestureFlag.OnChange);
    };
    _this.onEnd = function(event) {
      if (!_this.isEnabled()) return;
      var _getPointerEventData2 = getPointerEventData(event), values = _getPointerEventData2.values, rest = _objectWithoutPropertiesLoose(_getPointerEventData2, ["values"]);
      var kinematics = _this.getKinematics(values, event);
      _this.updateState(_extends({
        hovering: false,
        moving: false
      }, rest), _extends({}, kinematics, {}, genericEndState, {
        velocity: 0,
        velocities: [0, 0]
      }));
      _this.controller.fireGestureHandler("move", GestureFlag.OnEnd);
      _this.controller.fireGestureHandler("hover", GestureFlag.OnChange);
    };
    return _this;
  }
  var _proto = HoverRecognizer2.prototype;
  _proto.getEventBindings = function getEventBindings() {
    if (this.pointerEventsEnabled()) {
      return [["onPointerEnter", this.onStart], ["onPointerLeave", this.onEnd]];
    }
    return [["onMouseEnter", this.onStart], ["onMouseLeave", this.onEnd]];
  };
  return HoverRecognizer2;
}(CoordinatesRecognizer);
var DistanceAngleRecognizer = /* @__PURE__ */ function(_Recognizer) {
  _inheritsLoose(DistanceAngleRecognizer2, _Recognizer);
  function DistanceAngleRecognizer2() {
    var _this;
    _this = _Recognizer.apply(this, arguments) || this;
    _this.getKinematics = function(_ref, event) {
      var d = _ref[0], a = _ref[1];
      var state = _this.getState();
      var da = state.values, turns = state.turns, initial = state.initial, lastLocal = state.lastLocal, _state$time = state.time, time = _state$time === void 0 ? 0 : _state$time;
      a = a === void 0 ? da[1] : a;
      var diff_d = d - da[0];
      var diff_a = a - da[1];
      var newTurns = Math.abs(diff_a) > 300 ? turns + Math.sign(diff_a) : turns;
      diff_a -= 360 * newTurns;
      var delta_d = d - initial[0];
      var delta_a = a - 360 * newTurns - initial[1];
      var delta = [delta_d, delta_a];
      var delta_t = event.timeStamp - time;
      var velocities = calculateVelocities([diff_d, diff_a], delta_t);
      return {
        event,
        values: [d, a],
        delta,
        velocities,
        turns: newTurns,
        local: addV(lastLocal, delta),
        previous: da,
        time: event.timeStamp
      };
    };
    return _this;
  }
  return DistanceAngleRecognizer2;
}(Recognizer);
var PinchRecognizer = /* @__PURE__ */ function(_DistanceAngleRecogni) {
  _inheritsLoose(PinchRecognizer2, _DistanceAngleRecogni);
  function PinchRecognizer2(controller, args) {
    var _this;
    _this = _DistanceAngleRecogni.call(this, "pinch", controller, args) || this;
    _this.onStart = function(event) {
      if (!_this.isEnabled() || event.touches.length !== 2) return;
      var _getTwoTouchesEventDa = getTwoTouchesEventData(event), values = _getTwoTouchesEventDa.values, origin = _getTwoTouchesEventDa.origin, rest = _objectWithoutPropertiesLoose(_getTwoTouchesEventDa, ["values", "origin"]);
      var startState = _this.getStartState(values, event);
      _this.updateState(_extends({}, rest, {
        pinching: true,
        down: true
      }), _extends({}, startState, {
        origin,
        cancel: function cancel() {
          return _this.onCancel(event);
        }
      }), GestureFlag.OnStart);
    };
    _this.onChange = function(event) {
      var _this$getState = _this.getState(), canceled = _this$getState.canceled, active2 = _this$getState.active;
      if (canceled || !active2 || event.touches.length !== 2) return;
      var _getTwoTouchesEventDa2 = getTwoTouchesEventData(event), values = _getTwoTouchesEventDa2.values, origin = _getTwoTouchesEventDa2.origin, rest = _objectWithoutPropertiesLoose(_getTwoTouchesEventDa2, ["values", "origin"]);
      var kinematics = _this.getKinematics(values, event);
      var cancel = function cancel2() {
        return _this.onCancel(event);
      };
      _this.updateState(rest, _extends({}, kinematics, {
        origin,
        first: false,
        cancel
      }), GestureFlag.OnChange);
    };
    _this.onEnd = function(event) {
      if (!_this.getState().active) return;
      _this.updateState({
        pinching: false,
        down: false,
        touches: 0
      }, _extends({}, genericEndState, {
        event
      }), GestureFlag.OnEnd);
    };
    _this.onCancel = function(event) {
      _this.updateState(null, {
        canceled: true,
        cancel: noop
      });
      requestAnimationFrame(function() {
        return _this.onEnd(event);
      });
    };
    return _this;
  }
  var _proto = PinchRecognizer2.prototype;
  _proto.getEventBindings = function getEventBindings() {
    return [["onTouchStart", this.onStart], ["onTouchMove", this.onChange], [["onTouchEnd", "onTouchCancel"], this.onEnd]];
  };
  return PinchRecognizer2;
}(DistanceAngleRecognizer);
var PinchWheelRecognizer = /* @__PURE__ */ function(_DistanceAngleRecogni) {
  _inheritsLoose(PinchWheelRecognizer2, _DistanceAngleRecogni);
  function PinchWheelRecognizer2(controller, args) {
    var _this;
    _this = _DistanceAngleRecogni.call(this, "pinch", controller, args) || this;
    _this.onChange = function(event) {
      if (!_this.isEnabled() || !event.ctrlKey) return;
      event.preventDefault();
      _this.clearTimeout();
      _this.setTimeout(_this.onEnd);
      var _getWheelEventData = getWheelEventData(event), values = _getWheelEventData.values, rest = _objectWithoutPropertiesLoose(_getWheelEventData, ["values"]);
      var d = _this.getState().values[0] - values[1];
      if (!_this.getState().active) {
        var startState = _this.getStartState([d, 0], event);
        _this.updateState(_extends({
          pinching: true
        }, rest), startState, GestureFlag.OnStart);
      } else {
        var kinematics = _this.getKinematics([d, void 0], event);
        _this.updateState(rest, _extends({}, kinematics, {
          first: false
        }), GestureFlag.OnChange);
      }
    };
    _this.onEnd = function() {
      if (!_this.getState().active) return;
      _this.updateState({
        pinching: false,
        down: false,
        touches: 0
      }, _extends({}, genericEndState), GestureFlag.OnEnd);
    };
    return _this;
  }
  var _proto = PinchWheelRecognizer2.prototype;
  _proto.getEventBindings = function getEventBindings() {
    return [["onWheel", this.onChange]];
  };
  return PinchWheelRecognizer2;
}(DistanceAngleRecognizer);
var SCALE_FACTOR = 260;
var PinchWebKitGestureRecognizer = /* @__PURE__ */ function(_DistanceAngleRecogni) {
  _inheritsLoose(PinchWebKitGestureRecognizer2, _DistanceAngleRecogni);
  function PinchWebKitGestureRecognizer2(controller, args) {
    var _this;
    _this = _DistanceAngleRecogni.call(this, "pinch", controller, args) || this;
    _this.onStart = function(event) {
      if (!_this.isEnabled()) return;
      event.preventDefault();
      var da = [event.scale * SCALE_FACTOR, event.rotation];
      var startState = _this.getStartState(da, event);
      _this.updateState({
        pinching: true,
        down: true,
        touches: 2
      }, _extends({}, startState, {
        cancel: function cancel() {
          return _this.onCancel(event);
        }
      }), GestureFlag.OnStart);
    };
    _this.onChange = function(event) {
      var _this$getState = _this.getState(), canceled = _this$getState.canceled, active2 = _this$getState.active;
      if (canceled || !active2) return;
      event.preventDefault();
      var da = [event.scale * SCALE_FACTOR, event.rotation];
      var kinematics = _this.getKinematics(da, event);
      var cancel = function cancel2() {
        return _this.onCancel(event);
      };
      _this.updateState(null, _extends({}, kinematics, {
        first: false,
        cancel
      }), GestureFlag.OnChange);
    };
    _this.onEnd = function(event) {
      if (!_this.getState().active) return;
      event.preventDefault();
      _this.updateState({
        pinching: false,
        down: false,
        touches: 0
      }, _extends({}, genericEndState, {
        event
      }), GestureFlag.OnEnd);
    };
    _this.onCancel = function(event) {
      _this.updateState(null, {
        canceled: true,
        cancel: noop
      });
      requestAnimationFrame(function() {
        return _this.onEnd(event);
      });
    };
    _this.updateTouchData = function(event) {
      if (!_this.isEnabled() || event.touches.length !== 2) return;
      var _getTwoTouchesEventDa = getTwoTouchesEventData(event), origin = _getTwoTouchesEventDa.origin;
      _this.updateState(null, {
        origin
      });
    };
    return _this;
  }
  var _proto = PinchWebKitGestureRecognizer2.prototype;
  _proto.getEventBindings = function getEventBindings() {
    return [["onGestureStart", this.onStart], ["onGestureChange", this.onChange], [["onGestureEnd", "onTouchCancel"], this.onEnd], [["onTouchStart", "onTouchMove"], this.updateTouchData]];
  };
  return PinchWebKitGestureRecognizer2;
}(DistanceAngleRecognizer);
var GestureController = function GestureController2(handlers, config) {
  var _this = this;
  this.handlers = handlers;
  this.config = config;
  this.state = initialState;
  this.timeouts = {};
  this.bindings = {};
  this.domListeners = [];
  this.windowListeners = {};
  this.clean = function() {
    _this.cleanOnBind();
    Object.values(_this.timeouts).forEach(clearTimeout);
    Object.keys(_this.windowListeners).forEach(function(stateKey) {
      return _this.removeWindowListeners(stateKey);
    });
  };
  this.cleanOnBind = function() {
    _this.bindings = {};
    var domTarget = _this.config.domTarget;
    if (domTarget) {
      removeListeners(domTarget, _this.domListeners, _this.config.event);
      _this.domListeners = [];
    }
  };
  this.updateState = function(sharedState, gestureState, gestureKey, gestureFlag) {
    var _extends2;
    var stateKey = mappedKeys[gestureKey].stateKey;
    _this.state = _extends({}, _this.state, (_extends2 = {
      shared: _extends({}, _this.state.shared, {}, sharedState)
    }, _extends2[stateKey] = _extends({}, _this.state[stateKey], {}, gestureState), _extends2));
    if (gestureFlag) {
      _this.fireGestureHandler(gestureKey, gestureFlag);
    }
  };
  this.fireGestureHandler = function(gestureKey, gestureFlag) {
    var _mappedKeys$gestureKe = mappedKeys[gestureKey], stateKey = _mappedKeys$gestureKe.stateKey, handlerKey = _mappedKeys$gestureKe.handlerKey;
    var state = _extends({}, _this.state.shared, {}, _this.state[stateKey]);
    if (gestureKey === "pinch") {
      var pinchState = state;
      pinchState.da = state.values;
      pinchState.vdva = state.velocities;
    } else {
      var coordinatesState = state;
      coordinatesState.xy = state.values;
      coordinatesState.vxvy = state.velocities;
    }
    state.temp = state.memo;
    if (gestureFlag === GestureFlag.OnStart) {
      var handlerStart = handlerKey + "Start";
      var _handler = _this.handlers[handlerStart];
      _handler && _handler(state);
    }
    var handler = _this.handlers[handlerKey];
    if (handler) {
      var newMemo = handler(state);
      _this.state[stateKey].memo = newMemo !== void 0 ? newMemo : _this.state[stateKey].memo;
    }
    if (gestureFlag === GestureFlag.OnEnd) {
      var handlerEnd = handlerKey + "End";
      var _handler2 = _this.handlers[handlerEnd];
      _handler2 && _handler2(state);
    }
  };
  this.addWindowListeners = function(stateKey, listeners) {
    if (!_this.config.window) return;
    _this.windowListeners[stateKey] = listeners;
    addListeners(_this.config.window, listeners, _this.config.event);
  };
  this.removeWindowListeners = function(stateKey) {
    if (!_this.config.window) return;
    var listeners = _this.windowListeners[stateKey];
    if (listeners) {
      removeListeners(_this.config.window, listeners, _this.config.event);
      delete _this.windowListeners[stateKey];
    }
  };
  this.addRecognizer = function(recognizer) {
    recognizer.getEventBindings().map(_this.addEventBindings);
  };
  this.addEventBindings = function(_ref) {
    var eventNames = _ref[0], fn = _ref[1];
    var eventNamesArray = !Array.isArray(eventNames) ? [eventNames] : eventNames;
    eventNamesArray.forEach(function(eventName) {
      _this.bindings[eventName] = _this.bindings[eventName] ? [].concat(_this.bindings[eventName], [fn]) : [fn];
    });
  };
  this.addDomTargetListeners = function() {
    var domTarget = _this.config.domTarget;
    Object.entries(_this.bindings).forEach(function(_ref2) {
      var event = _ref2[0], fns = _ref2[1];
      _this.domListeners.push([event.substr(2).toLowerCase(), chainFns.apply(void 0, fns)]);
    });
    addListeners(domTarget, _this.domListeners, _this.config.event);
  };
  this.getBindings = function() {
    var output = {};
    var captureString = _this.config.event.capture ? "Capture" : "";
    Object.entries(_this.bindings).forEach(function(_ref3) {
      var event = _ref3[0], fns = _ref3[1];
      var fnsArray = Array.isArray(fns) ? fns : [fns];
      var key = event + captureString;
      output[key] = chainFns.apply(void 0, fnsArray);
    });
    return output;
  };
  this.bind = function() {
    var actions = new Set(Object.keys(_this.handlers).filter(function(k) {
      return k.indexOf("on") === 0;
    }).map(function(k) {
      var match = k.match(/(on[A-Z][a-z]+)/);
      return match ? match[1] : void 0;
    }));
    var domTarget = _this.config.domTarget;
    var genuineHandlers = _extends({}, _this.handlers);
    _this.cleanOnBind();
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (actions.has("onDrag")) {
      _this.addRecognizer(new DragRecognizer(_this, args));
      delete genuineHandlers.onDrag;
      delete genuineHandlers.onDragStart;
      delete genuineHandlers.onDragEnd;
    }
    if (actions.has("onScroll")) {
      _this.addRecognizer(new ScrollRecognizer(_this, args));
      delete genuineHandlers.onScroll;
      delete genuineHandlers.onScrollStart;
      delete genuineHandlers.onScrollEnd;
    }
    if (actions.has("onWheel")) {
      _this.addRecognizer(new WheelRecognizer(_this, args));
      delete genuineHandlers.onWheel;
      delete genuineHandlers.onWheelStart;
      delete genuineHandlers.onWheelEnd;
    }
    if (actions.has("onMove")) {
      _this.addRecognizer(new MoveRecognizer(_this, args));
      delete genuineHandlers.onMove;
      delete genuineHandlers.onMoveStart;
      delete genuineHandlers.onMoveEnd;
    }
    if (actions.has("onHover")) {
      _this.addRecognizer(new HoverRecognizer(_this, args));
      delete genuineHandlers.onHover;
    }
    if (actions.has("onPinch")) {
      if (domTarget && supportsGestureEvent()) {
        _this.addRecognizer(new PinchWebKitGestureRecognizer(_this, args));
      } else {
        _this.addRecognizer(new PinchRecognizer(_this, args));
        _this.addRecognizer(new PinchWheelRecognizer(_this, args));
      }
      delete genuineHandlers.onPinch;
      delete genuineHandlers.onPinchStart;
      delete genuineHandlers.onPinchEnd;
    }
    Object.entries(genuineHandlers).map(function(_ref4) {
      var event = _ref4[0], fn = _ref4[1];
      _this.addEventBindings([event, fn]);
    });
    if (domTarget) {
      _this.addDomTargetListeners();
      return _this.clean;
    }
    return _this.getBindings();
  };
};
function useGesture(handlers, config) {
  var gestureController = React.useRef();
  if (!gestureController.current) {
    gestureController.current = new GestureController(getDerivedHandlers(handlers), getDerivedConfig(config));
  }
  React.useEffect(function() {
    gestureController.current.config = getDerivedConfig(config);
    gestureController.current.handlers = getDerivedHandlers(handlers);
  }, [handlers, config]);
  React.useEffect(function() {
    return gestureController.current.clean;
  }, []);
  return gestureController.current.bind;
}
var useDrag = function useDrag2(handler, config) {
  return useGesture({
    onDrag: handler
  }, config);
};
function getDerivedHandlers(handlers) {
  if (typeof handlers === "function") return {
    onDrag: handlers
  };
  var onAction = handlers.onAction, rest = _objectWithoutPropertiesLoose(handlers, ["onAction"]);
  var derivedHandlers = rest;
  if (onAction) derivedHandlers.onDrag = onAction;
  return derivedHandlers;
}
function getDerivedConfig(config) {
  var derivedConfig = _extends({}, defaultConfig, {}, config);
  var domTarget = derivedConfig.domTarget;
  var realDomTarget = domTarget && "current" in domTarget ? domTarget.current : domTarget;
  derivedConfig.domTarget = realDomTarget;
  return derivedConfig;
}
var ArrowLeft = {};
var hasRequiredArrowLeft;
function requireArrowLeft() {
  if (hasRequiredArrowLeft) return ArrowLeft;
  hasRequiredArrowLeft = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(ArrowLeft, "__esModule", {
    value: true
  });
  ArrowLeft.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
    d: "M14 7l-5 5 5 5V7z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M24 0v24H0V0h24z"
  })), "ArrowLeft");
  ArrowLeft.default = _default;
  return ArrowLeft;
}
var ArrowLeftExports = /* @__PURE__ */ requireArrowLeft();
const LeftIcon = /* @__PURE__ */ getDefaultExportFromCjs(ArrowLeftExports);
var ArrowRight = {};
var hasRequiredArrowRight;
function requireArrowRight() {
  if (hasRequiredArrowRight) return ArrowRight;
  hasRequiredArrowRight = 1;
  var _interopRequireDefault = requireInteropRequireDefault();
  Object.defineProperty(ArrowRight, "__esModule", {
    value: true
  });
  ArrowRight.default = void 0;
  var _react = _interopRequireDefault(requireReact());
  var _createSvgIcon = _interopRequireDefault(/* @__PURE__ */ requireCreateSvgIcon());
  var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
    d: "M10 17l5-5-5-5v10z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 24V0h24v24H0z"
  })), "ArrowRight");
  ArrowRight.default = _default;
  return ArrowRight;
}
var ArrowRightExports = /* @__PURE__ */ requireArrowRight();
const RightIcon = /* @__PURE__ */ getDefaultExportFromCjs(ArrowRightExports);
function getBalanceItemMinMaxWidth() {
  if (window.innerWidth < 350) {
    return [90, 90 * 1.5];
  } else if (window.innerWidth < 600) {
    return [100, 100 * 1.5];
  } else {
    return [130, 130 * 1.5];
  }
}
const useBalanceItemStyles = makeStyles({
  root: {
    alignItems: "center",
    display: "flex",
    flex: "0 0 auto",
    justifyContent: "flex-start",
    minWidth: 130,
    opacity: 0.9,
    padding: "8px 16px",
    [breakpoints.down(600)]: {
      minWidth: 100
    },
    [breakpoints.down(350)]: {
      minWidth: 90
    }
  },
  compact: {
    minWidth: 100,
    [breakpoints.down(600)]: {
      minWidth: 90
    },
    [breakpoints.down(350)]: {
      minWidth: 80
    }
  },
  clickable: {
    borderRadius: 6,
    cursor: "pointer",
    opacity: 1,
    "@media (hover: hover)": {
      "&:hover": {
        background: "rgba(255, 255, 255, 0.05)"
      }
    }
  },
  logo: {
    boxShadow: "0 0 2px #000",
    boxSizing: "border-box",
    margin: 0,
    marginLeft: 0,
    marginRight: 16,
    pointerEvents: "none",
    // images are handled differently by web views
    width: 40,
    height: 40,
    [breakpoints.down(400)]: {
      width: 36,
      height: 36
    },
    "$compact &": {
      fontSize: 8,
      marginRight: 10,
      width: 24,
      height: 24
    }
  },
  balance: {
    fontSize: 16,
    lineHeight: "20px",
    marginTop: 0,
    textAlign: "left",
    [breakpoints.down(600)]: {
      fontSize: 14,
      lineHeight: "18px"
    },
    "$compact &": {
      fontSize: 16
    },
    "$compact & span": {
      fontWeight: "300 !important",
      opacity: "1 !important"
    }
  },
  assetCode: {
    display: "block",
    fontWeight: 700,
    "$compact &": {
      display: "none"
    }
  }
});
function BalanceItem(props, ref) {
  const classes = useBalanceItemStyles();
  const asset = React.useMemo(() => balancelineToAsset(props.balance), [props.balance]);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `${classes.root} ${props.compact ? classes.compact : ""} ${props.onClick ? classes.clickable : ""}`,
      onClick: props.onClick,
      ref
    },
    /* @__PURE__ */ React.createElement(AssetLogo, { asset, className: classes.logo, testnet: props.testnet }),
    /* @__PURE__ */ React.createElement("div", { className: classes.balance }, /* @__PURE__ */ React.createElement("span", { className: classes.assetCode }, props.balance.asset_type === "native" ? "XLM" : props.balance.asset_code), /* @__PURE__ */ React.createElement(SingleBalance, { assetCode: "", balance: props.balance.balance, inline: true }))
  );
}
const ScrollableBalanceItem = React.memo(React.forwardRef(BalanceItem));
function isAssetMatchingBalance(asset, balance) {
  return balance.asset_type === "native" ? asset.isNative() : balance.asset_code === asset.getCode() && balance.asset_issuer === asset.getIssuer();
}
const useScrollableBalancesStyles = makeStyles({
  root: {
    marginLeft: -10,
    marginRight: -10,
    position: "relative",
    [breakpoints.down(600)]: {
      marginLeft: -24,
      marginRight: -24
    }
  },
  sliderContainer: {
    marginLeft: 8,
    marginRight: 8,
    overflowX: "hidden"
  },
  slider: {
    display: "flex"
  },
  canScroll: {
    WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 5%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0.3) 95%, rgba(0, 0, 0, 0) 100%)"
  },
  canScrollLeft: {
    WebkitMaskPositionX: "0",
    WebkitMaskSize: "110%"
  },
  canScrollLeftRight: {
    WebkitMaskPositionX: "0",
    WebkitMaskSize: "100%"
  },
  canScrollRight: {
    WebkitMaskPositionX: "-10vw",
    WebkitMaskSize: "110%"
  },
  scrollButton: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    boxSizing: "content-box",
    position: "absolute",
    top: "50%",
    marginTop: -22,
    padding: 2,
    width: 40,
    height: 40,
    "@media (hover: hover)": {
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.12)"
      }
    },
    "@media (hover: none)": {
      "&, &:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.08)"
      }
    },
    [breakpoints.down(600)]: {
      marginTop: -22,
      padding: 4,
      width: 36,
      height: 36
    }
  },
  scrollButtonLeft: {
    left: 6,
    [breakpoints.down(600)]: {
      left: 12
    }
  },
  scrollButtonRight: {
    right: 6,
    [breakpoints.down(600)]: {
      right: 12
    }
  },
  scrollButtonIcon: {
    color: "white",
    fontSize: 40,
    [breakpoints.down(600)]: {
      fontSize: 36
    }
  }
});
function ScrollableBalances(props) {
  const { onClick } = props;
  const accountData = useLiveAccountData(props.account.accountID, props.account.testnet);
  const balanceItemsRef = React.useRef(/* @__PURE__ */ new Map());
  const classes = useScrollableBalancesStyles();
  const latestStepRef = React.useRef(0);
  const mouseState = React.useRef({ currentlyDragging: false, latestMouseMoveEndTime: 0 });
  const swipeableContainerRef = React.useRef(null);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [spring, setSpring] = useSpring(() => ({ x: 0 }));
  const nativeBalance = accountData.balances.find(
    (balance) => balance.asset_type === "native"
  ) || {
    asset_type: "native",
    balance: "0",
    buying_liabilities: "0",
    selling_liabilities: "0"
  };
  const isAccountActivated = Number.parseFloat(nativeBalance.balance) > 0;
  const trustedAssets = sortBalances(accountData.balances).filter((balance) => balance.asset_type !== "native").map((balance) => new libExports.Asset(balance.asset_code, balance.asset_issuer));
  const balancesPerStep = Math.max(Math.floor((window.innerWidth - 32 - 32) / getBalanceItemMinMaxWidth()[1]), 2);
  const stepCount = Math.ceil(accountData.balances.length / balancesPerStep);
  const getStepX = (step) => {
    step = Math.min(Math.max(step, 0), stepCount - 1);
    const balanceIndex = step * balancesPerStep;
    if (step === 0) {
      return 0;
    } else if (step === stepCount - 1 && swipeableContainerRef.current) {
      return -(swipeableContainerRef.current.scrollWidth - swipeableContainerRef.current.clientWidth + 8);
    } else if (step > 0 && balanceItemsRef.current.has(balanceIndex)) {
      return -balanceItemsRef.current.get(balanceIndex).offsetLeft + (step > 0 ? 32 : 0);
    }
    return 0;
  };
  const scrollTo = (newStep) => {
    latestStepRef.current = newStep;
    setCurrentStep(newStep);
    setSpring({ x: getStepX(newStep) });
  };
  const scrollLeft = () => scrollTo(Math.max(latestStepRef.current - 1, 0));
  const scrollRight = () => scrollTo(Math.min(latestStepRef.current + 1, stepCount - 1));
  const bind = useDrag(({ cancel, delta, direction, distance, down }) => {
    const lastXBeforeGesture = getStepX(latestStepRef.current);
    if (down && Math.abs(delta[0]) > 50) {
      mouseState.current.currentlyDragging = false;
      direction[0] < 0 ? scrollRight() : scrollLeft();
      cancel();
    } else {
      mouseState.current.currentlyDragging = true;
      setSpring({ x: down ? lastXBeforeGesture + delta[0] : lastXBeforeGesture });
    }
    if (distance > 5) {
      mouseState.current.latestMouseMoveEndTime = Date.now();
    }
  });
  const handleClick = React.useCallback(() => {
    const mouseDragJustHappened = Date.now() - mouseState.current.latestMouseMoveEndTime < 100;
    if (onClick && !mouseDragJustHappened) {
      onClick();
    }
  }, [onClick]);
  const canScrollLeft = currentStep > 0;
  const canScrollRight = currentStep < stepCount - 1;
  const className = [
    classes.sliderContainer,
    canScrollLeft || canScrollRight ? classes.canScroll : "",
    canScrollLeft && canScrollRight ? classes.canScrollLeftRight : canScrollLeft ? classes.canScrollLeft : canScrollRight ? classes.canScrollRight : ""
  ].join(" ");
  const balanceItems = React.useMemo(
    () => [
      ...trustedAssets.map((asset, index) => /* @__PURE__ */ React.createElement(
        ScrollableBalanceItem,
        {
          key: stringifyAsset(asset),
          ref: (domElement) => domElement ? balanceItemsRef.current.set(index, domElement) : void 0,
          balance: accountData.balances.find((balance) => isAssetMatchingBalance(asset, balance)),
          compact: props.compact,
          onClick: props.onClick && isAccountActivated ? handleClick : void 0,
          testnet: props.account.testnet
        }
      )),
      /* @__PURE__ */ React.createElement(
        ScrollableBalanceItem,
        {
          key: stringifyAsset(libExports.Asset.native()),
          ref: (domElement) => domElement ? balanceItemsRef.current.set(accountData.balances.length - 1, domElement) : void 0,
          balance: nativeBalance,
          compact: props.compact,
          onClick: props.onClick && isAccountActivated ? handleClick : void 0,
          testnet: props.account.testnet
        }
      )
    ],
    [
      accountData.balances,
      handleClick,
      isAccountActivated,
      nativeBalance,
      props.account.testnet,
      props.compact,
      props.onClick,
      trustedAssets
    ]
  );
  return /* @__PURE__ */ React.createElement("div", { className: classes.root, style: props.style }, /* @__PURE__ */ React.createElement("div", { className }, /* @__PURE__ */ React.createElement(
    extendedAnimated.div,
    {
      ...bind(),
      className: classes.slider,
      ref: swipeableContainerRef,
      style: { transform: spring.x.interpolate((xi) => `translate3d(${xi}px, 0, 0)`) }
    },
    balanceItems
  )), /* @__PURE__ */ React.createElement(
    IconButton,
    {
      className: `${classes.scrollButton} ${classes.scrollButtonLeft}`,
      onClick: scrollLeft,
      style: { display: canScrollLeft ? void 0 : "none" }
    },
    /* @__PURE__ */ React.createElement(LeftIcon, { className: classes.scrollButtonIcon })
  ), /* @__PURE__ */ React.createElement(
    IconButton,
    {
      className: `${classes.scrollButton} ${classes.scrollButtonRight}`,
      onClick: scrollRight,
      style: { display: canScrollRight ? void 0 : "none" }
    },
    /* @__PURE__ */ React.createElement(RightIcon, { className: classes.scrollButtonIcon })
  ));
}
function ScrollableBalancesWithFallback(props) {
  return /* @__PURE__ */ React.createElement(React.Suspense, { fallback: /* @__PURE__ */ React.createElement(InlineLoader, null) }, /* @__PURE__ */ React.createElement(ScrollableBalances, { ...props }));
}
const ScrollableBalances$1 = React.memo(ScrollableBalancesWithFallback);
export {
  ScrollableBalances$1 as default
};
//# sourceMappingURL=ScrollableBalances-C4xYilZB.js.map
