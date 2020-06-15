from django.db import models


class CommonModel(models.Model):
    class Meta:
        abstract = True

    _id = models.AutoField(primary_key=True, default=1)


class Batch(CommonModel):
    alphanum_code = models.CharField(max_length=10,
                                     help_text="Alphanumeric Code")
    forest = models.ForeignKey('Forest',
                               on_delete=models.SET_NULL,
                               null=True,
                               blank=True,
                               help_text="Forest that Batch came from, optional", )
    health = models.ForeignKey('Health',
                               on_delete=models.SET_NULL,
                               null=True,
                               blank=True,
                               help_text='Batch health, optional', )

    class Meta:
        verbose_name_plural = 'batches'

    def __str__(self):
        return f'Batch: {self.alphanum_code}'


class BatchMember(CommonModel):
    batch = models.ForeignKey('Batch', on_delete=models.CASCADE)
    beekeeper = models.ForeignKey('Beekeeper', on_delete=models.CASCADE)

    def __str__(self):
        return f'BatchMember Batch:{self.batch.alphanum_code}, Beekeeper: {self.beekeeper.name}'


class Beekeeper(CommonModel):
    name = models.CharField(max_length=50)
    bio = models.TextField()
    image_url = models.URLField()
    letter_text = models.TextField()
    letter_img_url = models.URLField()
    team = models.ForeignKey('BeekeeperTeam',
                             on_delete=models.SET_NULL,
                             null=True,
                             blank=True,
                             default=None, )

    def __str__(self):
        return f'Beekeeper: {self.name}'


class BeekeeperTeam(CommonModel):
    title = models.CharField(max_length=50)
    description = models.TextField()
    image_url = models.URLField()


class Forest(CommonModel):
    title = models.CharField(max_length=50)
    map_url = models.URLField(help_text='Google map url')
    description = models.TextField()


class Health(CommonModel):
    pass
