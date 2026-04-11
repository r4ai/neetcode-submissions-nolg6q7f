class TimeMap:

    def __init__(self):
        self.data: dict[str, tuple[list[int], list[str]]] = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if self.data.get(key) == None:
            self.data[key] = ([], [])

        self.data[key][0].append(timestamp)
        self.data[key][1].append(value)

    def get(self, key: str, timestamp: int) -> str:
        if self.data.get(key) == None:
            return ""
        index = self.binary_search(self.data[key][0], timestamp)
        if index == -1:
            return ""
        print(self.data[key][0], timestamp, index)
        return self.data[key][1][index]

    def binary_search(self, values: list[int], target: int):
        l = 0
        r = len(values) - 1
        result = -1

        while l <= r:
            m = (l + r) // 2

            if values[m] <= target:
                result = m
                l = m + 1
            else:
                r = m - 1

        return result
