# Atomic Componenets to be used througout wand

## AtomicButton **Example usage**
``` js
import AtomicButton from "components/atomicComponents/atomicButton";


```

## AtomicCard **Example usage**
``` js
import AtomicCard from "components/atomicComponents/atomicCard";

<AtomicCard padding="13" minHeight="30">
    {children}
</AtomicCard>

```

## AtomicSeperator **Example usage**
``` js
import AtomicSeperator from "components/atomicComponents/atomicSeperator";

<AtomicSeperator vertical length="33" />
<AtomicSeperator horizontal length="33" />
<AtomicSeperator vertical length="200" margin="16 16 16 16" />
<AtomicSeperator horizontal length="200" margin="16 16 16 16" />

```

## AtomicText **Example usage**
``` js
import AtomicText from "components/atomicComponents/atomicText";

<AtomicText text="bbbbb" size="29" />
<AtomicText text="bbbbb" />
<AtomicText
    text={prettifyGrowthPercentage("positive", 22)}
    size="29"
    color="red"
/>
```

