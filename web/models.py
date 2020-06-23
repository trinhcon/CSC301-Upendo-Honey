from django.db import models


class CommonModel(models.Model):
    class Meta:
        abstract = True

class CustomImageField(models.ImageField):
    def value_to_string(self, obj):
        return obj.fig.url

class Batch(CommonModel):
    forest = models.ForeignKey('Forest',
                               on_delete=models.SET_NULL,
                               null=True,
                               blank=True,
                               help_text="Forest that Batch came from, optional", )
    honey = models.ForeignKey('Honey',
                               on_delete=models.SET_NULL,
                               null=True,
                               blank=True,
                               help_text='Batch honey, optional', )

    class Meta:
        verbose_name_plural = 'batches'

    def __str__(self):
        return f'Batch: Forest {self.forest.title}, Honey: {self.honey_id}'


class BatchMember(CommonModel):
    alphanum_code = models.CharField(primary_key=True,
                                     max_length=15,
                                     help_text="Alphanumeric Code")
    batch = models.ForeignKey('Batch', on_delete=models.CASCADE)
    beekeeper = models.ForeignKey('Beekeeper', on_delete=models.CASCADE)

    def __str__(self):
        return f'BatchMember: alphanum_code {self.alphanum_code}'


class Beekeeper(CommonModel):
    name = models.CharField(max_length=50)
    bio = models.TextField()
    image_url = models.URLField(null=True, blank=True)
    photo = CustomImageField(upload_to='images/', null=True, blank=True)
    letter_text = models.TextField()
    letter_img_url = models.URLField()

    def __str__(self):
        return f'Beekeeper: {self.name}'


class Forest(CommonModel):
    title = models.CharField(max_length=50)
    map_url = models.URLField(help_text='Google map url')
    description = models.TextField()
    image_url = models.URLField(help_text='Forest image url')
    area = models.CharField(max_length=50, help_text="Forest area")
    animals = models.CharField(max_length=50, help_text="Forest animals")
    beekeeper_count = models.IntegerField(help_text="Number of beekeepers")
    plants = models.CharField(max_length=50, help_text="Forest plants")

    def __str__(self):
        return f'Forest: {self.title}'


class Honey(CommonModel):
    name = models.CharField(max_length=50)
    variety = models.CharField(max_length=50)
    jar_img_url = models.URLField(help_text='Forest image url')
    harvest_img_url = models.URLField(help_text='Forest image url')
    honey_description = models.TextField(help_text='Honey description')
    harvest_description = models.TextField(help_text='Harvest description')
    health_description = models.TextField(help_text='Health description')

    class Meta:
        verbose_name_plural = 'honey'

    def __str__(self):
        return f'Honey: {self.name}'
